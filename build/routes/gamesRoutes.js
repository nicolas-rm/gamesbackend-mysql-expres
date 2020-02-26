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
const express_1 = require("express");
const gamesController_1 = __importDefault(require("../controllers/gamesController"));
class GamesRoutes {
    /* INICIALIZA Y SE LLAMAN LOS METODOS */
    constructor() {
        /* ENROUTADOR */
        this.router = express_1.Router();
        this.config();
    }
    /* CONFIGURA LAS RUTAS */
    config() {
        this.router.post('/', gamesController_1.default.create);
        this.router.get('/', gamesController_1.default.read2);
        this.router.get('/:id', gamesController_1.default.readOne);
        this.router.put('/:id', gamesController_1.default.update);
        this.router.delete('/:id', gamesController_1.default.delete);
    }
}
/*
    * EJECUTA CLASE
    * Y
    * DEVUELVE UN OBJETO
*/
const gamesRoutes = new GamesRoutes();
/*
    * EXPORTA SOLAMENTE EL ROUTER,
    * PARA UTILIZAR LAS RUTAS EN
    * OTRO LUGAR Y NO TODO EL OBJETO
*/
exports.default = gamesRoutes.router;
