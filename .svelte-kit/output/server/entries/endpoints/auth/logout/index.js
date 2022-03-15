import { P as PQ, d as db } from "../../../../chunks/db-ead44ddb.js";
import "../../../../chunks/config-352e7003.js";
import "pg-promise";
async function post({ request }) {
  const data = await request.json();
  try {
    let sql = new PQ({
      text: "DELETE FROM session WHERE session_id=$1 RETURNING id",
      values: [data.session_id]
    });
    let result = await db.one(sql).catch((err) => {
      return {
        message: err.message
      };
    });
    if (result.id > 0) {
      return {
        status: 200,
        body: {
          id: result.id,
          message: "Successfully logged out"
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
        message: result.message
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
        message: err.message
      },
      headers: {
        "Content-Type": "application/json"
      }
    };
  }
}
export { post };
