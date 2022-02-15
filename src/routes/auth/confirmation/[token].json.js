import { db, PQ } from '../../../db';


export async function get({ params }) {
    let sql = new PQ({
        text: 'UPDATE appuser SET email_confirmed = true WHERE confirmation_token=$1 RETURNING id, username',
        values: [params.token]
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
                username: result.username,
                message: result.message
            }
        };
    }

    return {
        status: 500,
        body: {
            id: -1,
            message: result.message
        }
    };
}