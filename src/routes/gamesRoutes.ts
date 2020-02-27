
/* 
    * IMPORTACION DE LIBRERIAS 
    * O MUDULOS NECESARIOS
    * PARA LAS CONFIGURACIONES
*/

import { Router } from 'express';
import gamesController from '../controllers/gamesController';


class GamesRoutes {

    /* ENROUTADOR */
    public router: Router = Router();

    /* INICIALIZA Y SE LLAMAN LOS METODOS */
    constructor() {
        this.config();
    }

    /* CONFIGURA LAS RUTAS */
    config(): void {
        this.router.post('/',gamesController.create);
        this.router.get('/', gamesController.read);
        this.router.get('/:id', gamesController.readOne);
        this.router.put('/:id',gamesController.update);
        this.router.delete('/:id',gamesController.delete);
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

export default gamesRoutes.router;