import crypto from 'crypto';
import { db, PQ } from '../../../db';

export async function post({ request }) {
    const data = await request.json();
    const salt = crypto.randomBytes(16);
    const password_hash = crypto.pbkdf2Sync(data.password, salt, 310000, 32, 'sha256');
    try {
        let sql = new PQ({
            text: 'INSERT INTO appuser (username, email_confirmed, fullname, role_id, status_id, password_hash, salt) VALUES ($1, false, $2, 3, 0, $3, $4) ON CONFLICT (username) DO NOTHING RETURNING id',
            values: [data.username.toLowerCase(), data.fullname, password_hash, salt]
        });
        let result = await db.one(sql).catch((err) => {
            return {
                id: -1,
                message: err.message
            };
        });
        if (result.id > 0) {
            return {
                status: 200,
                body: {
                    id: result.id,
                    message: 'success'
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            };
        } else {
            return {
                status: 409,
                body: {
                    id: result.id,
                    message: 'user "' + data.username + '" exists: ' + result.message
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            };
        }
    } catch (err) {
        return {
            status: 500,
            body: {
                id: -1,
                message: "other err: " + err.message
            },
            headers: {
                'Content-Type': 'application/json'
            }
        };
    }
}