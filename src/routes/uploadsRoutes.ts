
/* 
    * IMPORTACION DE LIBRERIAS 
    * O MUDULOS NECESARIOS
    * PARA LAS CONFIGURACIONES
*/

import { Router } from 'express';
import { uploadsController } from '../controllers/uploadsController';




class UploadsRoutes {

    /* ENROUTADOR */
    public router: Router = Router();

    /* INICIALIZA Y SE LLAMAN LOS METODOS */
    constructor() {
        this.config();
        
    }

    /* CONFIGURA LAS RUTAS */
    config(): void {
        // this.router.post('/', uploadsController.upload);
        // this.router.get('/', gamesController.read);
        // this.router.get('/:id', gamesController.readOne);
        this.router.put('/:title/?:imagen', uploadsController.upload);
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

export default uploadsRoutes.router;