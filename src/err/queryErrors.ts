
class QueryErrors {


    constructor() {

    }

    errors(err: any) {
        if (err) {
            if (err.code === 'ER_NO_SUCH_TABLE') {
                console.error('sqlMessage: ' + err.sqlMessage);
                return;
            }
            if (err.code === 'ER_BAD_FIELD_ERROR') {
                console.error('sqlMessage: ' + err.sqlMessage);
                return;
            }
            if (err.code === 'PROTOCOL_CONNECTION_LOST') {
                console.error('Database connection was closed.')
            }
            if (err.code === 'ER_CON_COUNT_ERROR') {
                console.error('Database has too many connections.')
            }
            if (err.code === 'ECONNREFUSED') {
                console.error('Database connection was refused.')
            }
            if (err.code === 'ER_ACCESS_DENIED_ERROR') {
                console.error('Access denied for user.')
            }
        }


    }
}

export const queryErrors = new QueryErrors();