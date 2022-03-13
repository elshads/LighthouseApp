import { db, PQ } from '../../db';

export async function post({ request }) {
    const data = await request.json();
    try {
        if (data.user_id > 0) {
            let sql = new PQ({
                text: 'select w.id, w.title, w.session_start, w.created_on, w.created_by, w.updated_on, w.updated_by, ss.name sessionstatus_name, st.name sessiontype_name, cu.fullname created_by_name, uu.fullname updated_by_name from workshop w LEFT JOIN sessiontype st ON w.sessiontype_id = st.id LEFT JOIN sessionstatus ss ON w.sessionstatus_id = ss.id LEFT JOIN appuser cu ON w.created_by = cu.id LEFT JOIN appuser uu ON w.updated_by = uu.id ;'
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