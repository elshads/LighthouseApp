import crypto from "crypto";
import { v4 } from "uuid";
import { P as PQ, d as db } from "../../../../chunks/db-ead44ddb.js";
import { s as sendEmail } from "../../../../chunks/mailer-0bdf6f79.js";
import { c as config } from "../../../../chunks/config-352e7003.js";
import "pg-promise";
import "nodemailer";
async function post({ request }) {
  const data = await request.json();
  try {
    let selectSql = new PQ({
      text: "select id from appuser WHERE username=$1",
      values: [data.username.toLowerCase()]
    });
    let user = await db.one(selectSql).catch((err) => {
      return {
        message: err.message
      };
    });
    if (user.id > 0) {
      return {
        status: 409,
        body: {
          id: -9,
          message: "User exists"
        },
        headers: {
          "Content-Type": "application/json"
        }
      };
    }
    const salt = crypto.randomBytes(16);
    const password_hash = crypto.pbkdf2Sync(data.password, salt, 31e4, 32, "sha256");
    const token = v4();
    let insertSql = new PQ({
      text: "INSERT INTO appuser (username, email_confirmed, fullname, role_id, status_id, password_hash, salt, confirmation_token) VALUES ($1, false, $2, 3, 0, $3, $4, $5) ON CONFLICT (username) DO NOTHING RETURNING id",
      values: [data.username.toLowerCase(), data.fullname, password_hash, salt, token]
    });
    let result = await db.one(insertSql).catch((err) => {
      return {
        message: err.message
      };
    });
    if (result.id > 0) {
      const message = {
        to: data.username,
        subject: "no-reply: Email verification",
        html: `<div style="display: flex; text-align: center;"><a style="color: #fff; font-size: 1.25rem; text-decoration: none; background-color: #594ae2; padding: 1rem; border-radius: 2px;" href="${config.appurl}/auth/confirmation/${token}">Confirm email</a></div>`
      };
      sendEmail(message);
      return {
        status: 200,
        body: {
          id: result.id,
          message: "User successfully registered. Please confirm your email"
        },
        headers: {
          "Content-Type": "application/json"
        }
      };
    }
    return {
      status: 500,
      body: {
        id: -1,
        message: "endp result err: " + result.message
      },
      headers: {
        "Content-Type": "application/json"
      }
    };
  } catch (err) {
    return {
      status: 500,
      body: {
        id: -1,
        message: "endp other err: " + err.message
      },
      headers: {
        "Content-Type": "application/json"
      }
    };
  }
}
export { post };
