import crypto from 'crypto';
import * as cookie from 'cookie';
import { v4 as uuidv4 } from 'uuid';
import { db, PQ } from '../../../db';

export async function post({ request }) {
    const data = await request.json();
    try {
        let sql = new PQ({
            text: 'SELECT * FROM appuser WHERE username=$1',
            values: [data.username]
        });
        let result = await db.one(sql).catch((err) => {
            return {
                message: err.message
            };
        });
        if (result.id > 0) {
            const hash = crypto.pbkdf2Sync(data.password, result.salt, 310000, 32, 'sha256');
            const valid = Buffer.compare(result.password_hash, hash);
            const cookieId = uuidv4();
            const maxAge = 3600 * 24 * 180;
            const headers = {
                'Set-Cookie': cookie.serialize('session_id', cookieId, {
                    httpOnly: true,
                    maxAge,
                    path: '/'
                })
            };
            if (valid === 0) {
                let cookieSql = new PQ({
                    text: 'INSERT INTO session (session_id, user_id, start_date, max_age) VALUES ($1, $2, to_timestamp($3 / 1000.0), $4) RETURNING id',
                    values: [cookieId, result.id, Date.now(), maxAge]
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
                            message: 'Successfully logged in'
                        },
                        headers
                    };
                }
                return {
                    status: 500,
                    body: {
                        id: -1,
                        message: 'endp cookie err: ' + cookieResult.message
                    },
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };
            }
            return {
                status: 401,
                body: {
                    id: -1,
                    message: 'Wrong username or password'
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            };
        }
        return {
            status: 500,
            body: {
                id: -1,
                message: 'endp result err: ' + result.message
            },
            headers: {
                'Content-Type': 'application/json'
            }
        };
    } catch (err) {
        return {
            status: 500,
            body: {
                id: -1,
                message: 'endp other err: ' + err.message
            },
            headers: {
                'Content-Type': 'application/json'
            }
        };
    }
}