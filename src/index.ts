
/* 
    * IMPORTACION DE LIBRERIAS 
    * O MUDULOS NECESARIOS
    * PARA LAS CONFIGURACIONES
*/

import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';


/* IMPORTACIONES DE RUTAS */
import indexRoutes from './routes/indexRoutes';
import gamesRoutes from './routes/gamesRoutes';


/* 
    *  
    * CREAR SERVIDOR
    * 
*/

class Server {

    public app: Application;

    /* INICIALIZA Y SE LLAMAN LOS METODOS */
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }


    /* CONFIGURA EL SERVIDOR*/
    config(): void {
        /* PUERTO */
        this.app.set('port', process.env.PORT || 3000);

        /* OBTENER VISUALIZACION DE PETICIONES HTTP */
        this.app.use(morgan('dev'));

        /* CONEXIONES DE ANGULAR A SERVIDOR */
        this.app.use(cors());

        /* PETICIONES FORMATO JSON */
        this.app.use(express.json());

        /* FUNCION DE CUANDO SE ENVIA POR X-WWW-FORM-URLENCODED - BODY-PARSE */
        this.app.use(express.urlencoded({ extended: false }));
    }


    /* CONFIGURA LAS RUTAS */
    routes(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/api/games', gamesRoutes);
    }

    /* INICIALIZA EL SERVIDOR */
    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('\n');
            console.log('==> SERVER EXPRESS: ', 'ONLINE');
            console.log('\x1b[32m==> puerto express:', `${this.app.get('port')}`);
            console.log('\n');
        });
    }

}


/* 
    * EJECUTA CLASE   
    * Y
    * DEVUELVE UN OBJETO
*/

const server = new Server();
server.start();