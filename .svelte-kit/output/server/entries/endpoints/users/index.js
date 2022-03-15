import { P as PQ, d as db } from "../../../chunks/db-ead44ddb.js";
import "../../../chunks/config-352e7003.js";
import "pg-promise";
async function post({ request }) {
  const data = await request.json();
  try {
    let sql = new PQ({
      text: "select u.*, r.name rolename, s.name statusname from appuser u LEFT JOIN role r ON u.role_id = r.id LEFT JOIN status s ON u.status_id = s.id"
    });
    let rows = await db.query(sql).catch((err) => {
      return {
        message: err.message
      };
    });
    if (rows.length > 0) {
      return {
        status: 200,
        body: {
          rows,
          user_id: data.user_id,
          message: "User exists"
        },
        headers: {
          "Content-Type": "application/json"
        }
      };
    }
    return {
      status: 500,
      body: {
        rows: [],
        user_id: data.user_id,
        message: "No data found: " + rows.message
      },
      headers: {
        "Content-Type": "application/json"
      }
    };
  } catch (err) {
    return {
      status: 500,
      body: {
        rows: [],
        user_id: data.user_id,
        message: "endp other err: " + err.message
      },
      headers: {
        "Content-Type": "application/json"
      }
    };
  }
}
export { post };
