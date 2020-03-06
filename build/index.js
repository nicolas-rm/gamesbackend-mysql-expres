"use strict";
/*
    * IMPORTACION DE LIBRERIAS
    * O MUDULOS NECESARIOS
    * PARA LAS CONFIGURACIONES
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
/* IMPORTACIONES DE RUTAS */
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const gamesRoutes_1 = __importDefault(require("./routes/gamesRoutes"));
const uploadsRoutes_1 = __importDefault(require("./routes/uploadsRoutes"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const loadsRoutes_1 = __importDefault(require("./routes/loadsRoutes"));
/*
    *
    * CREAR SERVIDOR
    *
*/
class Server {
    /* INICIALIZA Y SE LLAMAN LOS METODOS */
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    /* CONFIGURA EL SERVIDOR*/
    config() {
        /* PUERTO */
        this.app.set('port', process.env.PORT || 3000);
        /* OBTENER VISUALIZACION DE PETICIONES HTTP */
        this.app.use(morgan_1.default('dev'));
        /* CONEXIONES DE ANGULAR A SERVIDOR */
        this.app.use(cors_1.default());
        /* PETICIONES FORMATO JSON */
        this.app.use(express_1.default.json());
        this.app.use(express_fileupload_1.default());
        /* FUNCION DE CUANDO SE ENVIA POR X-WWW-FORM-URLENCODED - BODY-PARSE */
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    /* CONFIGURA LAS RUTAS */
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/games', gamesRoutes_1.default);
        this.app.use('/api/uploads', uploadsRoutes_1.default);
        this.app.use('/api/loads', loadsRoutes_1.default);
    }
    /* INICIALIZA EL SERVIDOR */
    start() {
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
