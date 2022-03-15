import { v4 } from "uuid";
import { P as PQ, d as db } from "../../../../chunks/db-ead44ddb.js";
import { s as sendEmail } from "../../../../chunks/mailer-0bdf6f79.js";
import { c as config } from "../../../../chunks/config-352e7003.js";
import "pg-promise";
import "nodemailer";
async function post({ request }) {
  const data = await request.json();
  try {
    const token = v4();
    let selectSql = new PQ({
      text: "UPDATE appuser SET confirmation_token=$1 WHERE username=$2 RETURNING id",
      values: [token, data.username.toLowerCase()]
    });
    let result = await db.one(selectSql).catch((err) => {
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
          message: "Confirmation email sent"
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
        message: "User does not exist: " + result.message
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
