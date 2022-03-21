import { db, PQ } from '$src/db';

export async function post({ request }) {
    const data = await request.json();
    try {
        if (data.user_id > 0) {
            let sql = new PQ({
                text: 'select w.id, w.title, w.session_start, w.session_end, w.reg_start, w.reg_end, w.created_on, w.created_by, w.updated_on, w.updated_by, ss.name sessionstatus_name, st.name sessiontype_name, cu.fullname created_by_name, uu.fullname updated_by_name from workshop w LEFT JOIN sessiontype st ON w.sessiontype_id = st.id LEFT JOIN sessionstatus ss ON w.sessionstatus_id = ss.id LEFT JOIN appuser cu ON w.created_by = cu.id LEFT JOIN appuser uu ON w.updated_by = uu.id ;'
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

export async function del({ request }) {
    const data = await request.json();
    try {
        if (data.user_id > 0) {
            let sqlText = '';
            for (const item of data.deleted_ids) {
                sqlText = sqlText + `do $$ begin if (select count(w) from workshop w inner join workshop_appuser wu on w.id = wu.workshop_id where w.id = ${item}) < 1 then delete from workshop_lecturer wl where wl.workshop_id = ${item}; delete from workshop w where w.id = ${item}; end if; end; $$; `
            }
            // let sql = new PQ({
            //     text: 'do $$ begin if (select count(w) from workshop w inner join workshop_appuser wu on w.id = wu.workshop_id where w.id = $1) < 1 then delete from workshop_lecturer wl where wl.workshop_id = $1; delete from workshop w where w.id = $1; end if; end; $$;',
            //     values: []
            // });
            let rows = await db.query(sqlText).catch((err) => {
                return {
                    message: err.message
                };
            });

            if (rows.message === undefined) {
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