import crypto from 'crypto';
import * as cookie from 'cookie';
import { v4 as uuidv4 } from 'uuid';
import { db, PQ } from '../../../db';

export async function post({ request }) {
    const data = await request.json();
    const salt = crypto.randomBytes(16);
    const password_hash = crypto.pbkdf2Sync(data.password, salt, 310000, 32, 'sha256');
    try {
        let sql = new PQ({
            text: 'INSERT INTO appuser (username, email_confirmed, fullname, role_id, status_id, password_hash, salt) VALUES ($username, false, $fullname, 3, 0, $password_hash, $salt) ON CONFLICT (username) DO NOTHING RETURNING id',
            values: [data.username, data.fullname, password_hash, salt]
        });
        let result = await db.one(sql);
        if (result) {
            let hash = crypto.pbkdf2Sync(data.password, result.salt, 310000, 32, 'sha256');
            let valid = Buffer.compare(result.password_hash, hash);
            if (valid === 0) {
                return {
                    status: 200,
                    body: {
                        id: result.id,
                        message: '',
                        inhash: result.password_hash,
                        outhash: hash,
                        valid
                    },
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };
            } else {
                return {
                    status: 400,
                    body: {
                        id: result.id,
                        message: 'Username or password wrong',
                        inhash: result.password_hash,
                        outhash: hash,
                        valid
                    },
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };
            }
        }
    } catch (err) {
        return {
            status: 500,
            body: {
                id: 0,
                message: err.message
            },
            headers: {
                'Content-Type': 'application/json'
            }
        };
    }
}