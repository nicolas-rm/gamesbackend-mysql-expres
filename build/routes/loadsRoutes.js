"use strict";
/*
    * IMPORTACION DE LIBRERIAS
    * O MUDULOS NECESARIOS
    * PARA LAS CONFIGURACIONES
*/
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const loadsController_1 = require("../controllers/loadsController");
class LoadsRoutes {
    /* INICIALIZA Y SE LLAMAN LOS METODOS */
    constructor() {
        /* ENROUTADOR */
        this.router = express_1.Router();
        this.config();
    }
    /* CONFIGURA LAS RUTAS */
    config() {
        // this.router.post('/', uploadsController.upload);
        // this.router.get('/', gamesController.read);
        this.router.get('/:title', loadsController_1.loadsController.readOne);
        // this.router.put('/:title', uploadsController.upload);
        // this.router.delete('/:id', gamesController.delete);
    }
}
/*
    * EJECUTA CLASE
    * Y
    * DEVUELVE UN OBJETO
*/
const loadsRoutes = new LoadsRoutes();
/*
    * EXPORTA SOLAMENTE EL ROUTER,
    * PARA UTILIZAR LAS RUTAS EN
    * OTRO LUGAR Y NO TODO EL OBJETO
*/
exports.default = loadsRoutes.router;
