"use strict";
/*
    * IMPORTACION DE LIBRERIAS
    * O MUDULOS NECESARIOS
    * PARA LAS CONFIGURACIONES
*/
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const uploadsController_1 = require("../controllers/uploadsController");
class UploadsRoutes {
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
        // this.router.get('/:id', gamesController.readOne);
        this.router.put('/:title/?:imagen', uploadsController_1.uploadsController.upload);
        // this.router.delete('/:id', gamesController.delete);
    }
}
/*
    * EJECUTA CLASE
    * Y
    * DEVUELVE UN OBJETO
*/
const uploadsRoutes = new UploadsRoutes();
/*
    * EXPORTA SOLAMENTE EL ROUTER,
    * PARA UTILIZAR LAS RUTAS EN
    * OTRO LUGAR Y NO TODO EL OBJETO
*/
exports.default = uploadsRoutes.router;
