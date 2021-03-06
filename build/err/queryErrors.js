"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class QueryErrors {
    constructor() {
    }
    errors(err, res) {
        if (err) {
            if (err.code === 'ER_NO_SUCH_TABLE') {
                console.error('sqlMessage: ' + err.sqlMessage);
            }
            if (err.code === 'ER_BAD_FIELD_ERROR') {
                console.error('sqlMessage: ' + err.sqlMessage);
            }
            res.status(400).json({
                ok: false,
                err
            });
        }
    }
    dataBaseErrors(err) {
        if (err) {
            if (err.code === 'PROTOCOL_CONNECTION_LOST') {
                console.error('Database connection was closed.');
            }
            if (err.code === 'ER_CON_COUNT_ERROR') {
                console.error('Database has too many connections.');
            }
            if (err.code === 'ECONNREFUSED') {
                console.error('Database connection was refused.');
            }
            if (err.code === 'ER_ACCESS_DENIED_ERROR') {
                console.error('Access denied for user.');
            }
            if (err.code === 'ER_NO_SUCH_TABLE') {
                console.error('Access denied for user.');
            }
        }
    }
}
exports.queryErrors = new QueryErrors();
