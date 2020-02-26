
/* 
* IMPORTACION DE LIBRERIAS 
* O MUDULOS NECESARIOS
* PARA LAS CONFIGURACIONES
*/

import { Router } from 'express';

import { indexController } from './../controllers/indexController';


class IndexRoutes {

    /* ENROUTADOR */
    public router: Router = Router();

    /* INICIALIZA Y SE LLAMAN LOS METODOS */
    constructor() {
        this.config();
    }

    /* CONFIGURA LAS RUTAS */
    config(): void {
        this.router.get('/', indexController.index);
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

export default indexRoutes.router;