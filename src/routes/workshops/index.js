import { db, PQ } from '$src/db';

export async function post({ request }) {
    const data = await request.json();
    try {
        if (data.user_id > 0) {
            let sql = new PQ({
                text: 'select w.*, ss.name sessionstatus_name, st.name sessiontype_name, sc.name sessioncategory_name, loc.name location_name,  ARRAY( SELECT lec.name FROM workshop_lecturer wl inner join lecturer lec ON wl.lecturer_id = lec.id AND wl.workshop_id = w.id ) lecturers, (select count(*) from workshop_appuser wu where wu.workshop_id = w.id and wu.appuser_id = $1) registered from workshop w LEFT JOIN sessiontype st ON w.sessiontype_id = st.id LEFT JOIN sessioncategory sc ON w.sessioncategory_id = sc.id LEFT JOIN sessionstatus ss ON w.sessionstatus_id = ss.id LEFT JOIN location loc ON w.location_id = loc.id WHERE w.sessionstatus_id = 1;',
                values: [data.user_id],
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