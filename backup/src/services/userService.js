const { db } = require("../config");
const { ParameterizedQuery: PQ } = require("pg-promise");
const crypto = require("crypto");

async function getById(req, res) {
    if (Number.isInteger(parseInt(req.params.id))) {
        try {
            const data = await db.any(
                `SELECT * FROM appuser WHERE id = ${req.params.id}`
            );

            if (data == null || data.length == 0) {
                return res.status(404).send({
                    status: "fail",
                    message: "returned value is empty",
                    results: 0,
                    data: null,
                });
            }

            res.status(200).send({
                status: "success",
                message: null,
                results: data.length,
                data: data,
            });
        } catch (err) {
            res.status(404).send({
                status: "error",
                message: err.message,
                results: 0,
                data: null,
            });
        }
    } else {
        res.status(404).send({
            status: "fail",
            message: "id is not integer",
            results: 0,
            data: null,
        });
    }
}

async function createUser(username, password) {
    let salt = crypto.randomBytes(16);
    let password_hash = crypto.pbkdf2Sync(password, salt, 310000, 32, "sha256");
    const result = await db.one(
        `INSERT OR IGNORE INTO appuser (username, password_hash, salt) VALUES (${username}, ${password_hash}, ${salt})`
    );
    return result;
}

async function updateUser(username, password) {
    let salt = crypto.randomBytes(16);
    let password_hash = crypto.pbkdf2Sync(password, salt, 310000, 32, "sha256");
    try {
        let sql = new PQ({
            text: "UPDATE appuser SET password_hash = $1, salt = $2 WHERE username = $3 RETURNING id",
            values: [password_hash, salt, username],
        });
        let result = await db.one(sql);
        return result;
    } catch (err) {
        return err.message;
    }
}

async function getByUsername(username) {
    const result = await db.one(
        `SELECT * FROM appuser WHERE username='${username}'`
    );
    return result;
}

async function getAll(req, res) {
    try {
        const data = await db.any(
            "SELECT u.*, r.name rolename, s.name statusname FROM appuser u LEFT JOIN role r ON u.role_id = r.id LEFT JOIN status s ON u.status_id = s.id ORDER BY u.email"
        );

        if (data == null || data.length == 0) {
            return res.status(404).send({
                status: "fail",
                message: "returned value is empty",
                results: 0,
                data: null,
            });
        }

        res.status(200).send({
            status: "success",
            message: null,
            results: data.length,
            data: data,
        });
    } catch (err) {
        res.status(404).send({
            status: "error",
            message: err.message,
            results: 0,
            data: null,
        });
    }
}

async function setUserTheme(req, res, next) {
    try {
        const data = await db.result(
            `UPDATE appuser SET theme = '${req.body.theme}' WHERE id = ${req.body.id}`
        );

        if (data == null || data.length == 0) {
            return res.status(404).send({
                status: "fail",
                message: "returned value is empty",
                results: 0,
                data: null,
            });
        }

        res.status(200).send({
            status: "success",
            message: null,
            results: data.rowCount,
            data: req.body,
        });
    } catch (err) {
        res.status(404).send({
            status: "error",
            message: err.message,
            results: 0,
            data: null,
        });
    }
}

module.exports = { getById, getAll, createUser, getByUsername, updateUser };