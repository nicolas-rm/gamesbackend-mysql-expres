import { Request, Response } from 'express';


class IndexController {


    index(req: Request, res: Response) {
        res.json({
            text: 'API IS /API/GAMES'
        });
    }
}


export const indexController = new IndexController();