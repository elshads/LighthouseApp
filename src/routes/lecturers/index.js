import { db, PQ } from '$src/db';

export async function post({ request }) {
    const data = await request.json();
    try {
        if (data.user_id > 0) {
            let sql = new PQ({
                text: 'select l.*, s.name status_name from lecturer l LEFT JOIN status s ON l.status_id = s.id order by l.name;'
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
                        rows
                    },
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };
            }

            return {
                status: 500,
                body: {
                    rows: [],
                    message: 'endp result err: ' + rows.message
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            };
        }

        return {
            status: 400,
            body: {
                rows: [],
                message: 'User not authorized'
            },
            headers: {
                'Content-Type': 'application/json'
            }
        };
    } catch (err) {
        return {
            status: 500,
            body: {
                rows: [],
                message: 'endp other err: ' + err.message
            },
            headers: {
                'Content-Type': 'application/json'
            }
        };
    }
}