"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const queryErrors_1 = require("./err/queryErrors");
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const keys_1 = __importDefault(require("./keys"));
const pool = promise_mysql_1.default.createPool(keys_1.default.database);
pool.then((res) => res.getConnection().
    then((connection) => {
    res.releaseConnection(connection);
    console.log('Database is connected.');
})).catch((err) => {
    queryErrors_1.queryErrors.dataBaseErrors(err);
});
exports.default = pool;
/*
Para los que tengan error en  getConnection y no quieren usar la versión antigua.

Yo solucioné así:
En database.ts al definir pool:
pool.then((r: any) => r.getConnection().then((connection:any)=>{r.releaseConnection(connection);}));

Y al momento de usar el pool en GamesController por ejemplo, en el metodo create:
 await pool.then(
            (p) => p.query('INSERT INTO games SET ?',[req.body])
        );
        res.json({msg:'Game Saved.'});

Saludos
 */
