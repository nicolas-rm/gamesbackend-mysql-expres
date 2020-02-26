"use strict";
/*
* IMPORTACION DE LIBRERIAS
* O MUDULOS NECESARIOS
* PARA LAS CONFIGURACIONES
*/
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("./../controllers/indexController");
class IndexRoutes {
    /* INICIALIZA Y SE LLAMAN LOS METODOS */
    constructor() {
        /* ENROUTADOR */
        this.router = express_1.Router();
        this.config();
    }
    /* CONFIGURA LAS RUTAS */
    config() {
        this.router.get('/', indexController_1.indexController.index);
    }
}
/*
    * EJECUTA CLASE
    * Y
    * DEVUELVE UN OBJETO
*/
const indexRoutes = new IndexRoutes();
/*
    * EXPORTA SOLAMENTE EL ROUTER,
    * PARA UTILIZAR LAS RUTAS EN
    * OTRO LUGAR Y NO TODO EL OBJETO
*/
exports.default = indexRoutes.router;
