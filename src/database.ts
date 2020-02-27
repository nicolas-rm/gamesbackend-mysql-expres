import { queryErrors } from './err/queryErrors';
import mysql from 'promise-mysql';

import keys from './keys';


const pool = mysql.createPool(keys.database);




pool.then((res) => res.getConnection().
    then((connection: any) => {

        res.releaseConnection(connection);
        console.log('Database is connected.');

    })).catch((err) => {
        queryErrors.dataBaseErrors(err);
    });


export default pool;



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


