import { db, PQ } from '$src/db';
import { v4 as uuidv4 } from 'uuid';

export async function post({ request }) {
    const data = await request.json();
    if (data.method === 'select') {
        return await select(data);
    } else if (data.method === 'insert') {
        return await insert(data);
    } else if (data.method === 'update') {
        return await update(data);
    }
}

async function select(data) {
    try {
        if (data.user_id > 0) {
            let workshopSql = new PQ({
                text: 'select * from workshop where id=$1;',
                values: [data.id]
            });
            let workshop = await db.one(workshopSql).catch((err) => {
                return {
                    message: err.message
                };
            });

            let sessionstatusSql = new PQ({
                text: 'select * from sessionstatus order by id;'
            });
            let sessionstatus = await db.query(sessionstatusSql).catch((err) => {
                return {
                    message: err.message
                };
            });

            let sessiontypeSql = new PQ({
                text: 'select * from sessiontype;'
            });
            let sessiontype = await db.query(sessiontypeSql).catch((err) => {
                return {
                    message: err.message
                };
            });

            let sessioncategorySql = new PQ({
                text: 'select * from sessioncategory;'
            });
            let sessioncategory = await db.query(sessioncategorySql).catch((err) => {
                return {
                    message: err.message
                };
            });

            let locationsSql = new PQ({
                text: 'select * from location;'
            });
            let locations = await db.query(locationsSql).catch((err) => {
                return {
                    message: err.message
                };
            });

            let workshopLecturersSql = new PQ({
                text: 'SELECT l.id, l.name, l.email FROM workshop_lecturer wl inner join lecturer l on wl.lecturer_id = l.id where workshop_id = $1;',
                values: [data.id]
            });
            let workshop_lecturers = await db.query(workshopLecturersSql).catch((err) => {
                return {
                    message: err.message
                };
            });

            let lecturersSql = new PQ({
                text: 'select * from lecturer order by name;'
            });
            let lecturers = await db.query(lecturersSql).catch((err) => {
                return {
                    message: err.message
                };
            });

            workshop.lecturers = workshop_lecturers;

            return {
                status: 200,
                body: {
                    status: 200,
                    workshop,
                    lecturers,
                    sessionstatus,
                    sessiontype,
                    sessioncategory,
                    locations
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

async function insert(data) {
    try {
        if (data.user_id > 0) {
            let workshopSql = new PQ({
                text: 'insert into workshop (' +
                    'title, description, content, session_start, session_end, reg_start, reg_end, points, sessiontype_id, sessioncategory_id, ' +
                    'location_id, sessionstatus_id, created_on, created_by, updated_on, updated_by, registration_token, attendance_token' +
                    ') values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18) RETURNING id',
                values: [
                    data.workshop.title,
                    data.workshop.description,
                    data.workshop.content,
                    data.workshop.session_start,
                    data.workshop.session_end,
                    data.workshop.reg_start,
                    data.workshop.reg_end,
                    data.workshop.points,
                    data.workshop.sessiontype_id,
                    data.workshop.sessioncategory_id,
                    data.workshop.location_id,
                    data.workshop.sessionstatus_id,
                    new Date(Date.now()),
                    data.user_id,
                    new Date(Date.now()),
                    data.user_id,
                    uuidv4(),
                    uuidv4()
                ]
            });
            let result = await db.one(workshopSql).catch((err) => {
                return {
                    message: err.message
                };
            });
            if (result.id > 0) {
                let deleteSql = `delete from workshop_lecturer where workshop_id = ${data.workshop.id}; `;
                if (data.workshop.lecturers.length > 0) {
                    let insertSQL = 'insert into workshop_lecturer (workshop_id, lecturer_id) values returning id';
                    for (const lecturer of data.workshop.lecturers) {
                        insertSQL = insertSQL + `(${data.workshop.id}, ${lecturer.id}), `;
                    }
                    let insertLecturersResult = await db.query(insertSQL).catch((err) => {
                        return {
                            message: err.message
                        };
                    });
                }
            }

            console.log(JSON.stringify(data.workshop));
            console.log(result.message);
            return {
                status: 200,
                body: {
                    status: 200,
                    result,
                    message: `Message: ${data.workshop.id}`
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

async function update(data) {
    try {
        if (data.user_id > 0) {
            let workshopSql = new PQ({
                text: 'update workshop SET title=$1, description=$2, content=$3, session_start=$4, session_end=$5, reg_start=$6, reg_end=$7, points=$8, sessiontype_id=$9, sessioncategory_id=$10, location_id=$11, sessionstatus_id=$12, updated_on=$13, updated_by=$14 WHERE id = $15 RETURNING id',
                values: [
                    data.workshop.title,
                    data.workshop.description,
                    data.workshop.content,
                    data.workshop.session_start,
                    data.workshop.session_end,
                    data.workshop.reg_start,
                    data.workshop.reg_end,
                    data.workshop.points,
                    data.workshop.sessiontype_id,
                    data.workshop.sessioncategory_id,
                    data.workshop.location_id,
                    data.workshop.sessionstatus_id,
                    new Date(Date.now()),
                    data.user_id,
                    data.workshop.id
                ]
            });
            let result = await db.one(workshopSql).catch((err) => {
                return {
                    message: err.message
                };
            });

            if (result.id > 0) {
                let deleteSql = `delete from workshop_lecturer where workshop_id = ${data.workshop.id}; `;
                let deleteLecturersResult = await db.query(deleteSql).catch((err) => {
                    return {
                        message: err.message
                    };
                });
                if (data.workshop.lecturers.length > 0) {
                    let insertSQL = 'insert into workshop_lecturer (workshop_id, lecturer_id) values';
                    for (const lecturer of data.workshop.lecturers) {
                        insertSQL = insertSQL + ` (${data.workshop.id}, ${lecturer.id}), `;
                    }
                    insertSQL = insertSQL + ' returning id';
                    insertSQL = insertSQL.replace(',  returning id', ' returning id');
                    let insertLecturersResult = await db.query(insertSQL).catch((err) => {
                        return {
                            message: err.message
                        };
                    });
                }
            }

            return {
                status: 200,
                body: {
                    status: 200,
                    result
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