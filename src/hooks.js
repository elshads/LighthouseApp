import * as cookie from 'cookie';
import { db, PQ } from './db';


export async function getSession({ request: { headers } }) {
    try {
        const cookies = cookie.parse(headers.get('cookie') || '');
        if (!cookies.session_id) {
            return {
                authenticated: false
            };
        }
        let sql = new PQ({
            text: 'SELECT s.session_id, u.* FROM session s INNER JOIN appuser u ON s.user_id = u.id AND s.session_id=$1',
            values: [cookies.session_id]
        });
        const user = await db.one(sql).catch((err) => {
            return {
                message: err.message
            };
        });
        if (user.id > 0) {
            return {
                authenticated: true,
                user: {
                    id: user.id,
                    username: user.username,
                    fullname: user.fullname,
                    session_id: user.session_id,
                }
            };
        }
        return {
            authenticated: false
        };
    } catch (err) {
        return {
            authenticated: false
        };
    }
}