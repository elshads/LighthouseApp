import crypto from "crypto";
import * as cookie from "cookie";
import { v4 } from "uuid";
import { P as PQ, d as db } from "../../../../chunks/db-ead44ddb.js";
import "../../../../chunks/config-352e7003.js";
import "pg-promise";
async function post({ request }) {
  const data = await request.json();
  try {
    let sql = new PQ({
      text: "SELECT * FROM appuser WHERE username=$1",
      values: [data.username]
    });
    let user = await db.one(sql).catch((err) => {
      return {
        message: err.message
      };
    });
    if (user.id > 0) {
      const hash = crypto.pbkdf2Sync(data.password, user.salt, 31e4, 32, "sha256");
      const validPassword = Buffer.compare(user.password_hash, hash);
      if (validPassword === 0) {
        if (user.status_id > 0) {
          return {
            status: 401,
            body: {
              id: -1,
              message: "User closed. Contact your administrator"
            },
            headers: {
              "Content-Type": "application/json"
            }
          };
        }
        if (!user.email_confirmed) {
          return {
            status: 401,
            body: {
              id: -2,
              message: "Email is not confirmed. Please confirm your email"
            },
            headers: {
              "Content-Type": "application/json"
            }
          };
        }
        const cookieId = v4();
        const maxAge = 3600 * 24 * 30;
        const headers = {
          "Set-Cookie": cookie.serialize("session_id", cookieId, {
            httpOnly: true,
            sameSite: "strict",
            maxAge,
            path: "/"
          })
        };
        let cookieSql = new PQ({
          text: "INSERT INTO session (session_id, user_id, start_date, max_age) VALUES ($1, $2, to_timestamp($3 / 1000.0), $4) RETURNING id",
          values: [cookieId, user.id, Date.now(), maxAge]
        });
        let cookieResult = await db.one(cookieSql).catch((err) => {
          return {
            message: err.message
          };
        });
        if (cookieResult.id > 0) {
          return {
            status: 200,
            body: {
              id: cookieResult.id,
              message: "Successfully logged in"
            },
            headers
          };
        }
        return {
          status: 500,
          body: {
            id: -1,
            message: "endp cookie err: " + cookieResult.message
          },
          headers: {
            "Content-Type": "application/json"
          }
        };
      }
      return {
        status: 401,
        body: {
          id: -1,
          message: "Wrong username or password"
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
        message: "Wrong username or password"
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
