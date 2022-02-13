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
            text: 'SELECT * FROM session WHERE session_id=$1',
            values: [cookies.session_id]
        });
        const session = await db.one(sql).catch((err) => {
            return {
                message: err.message
            };
        });
        if (session.id > 0) {
            return {
                authenticated: true,
                user: session.user_id
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