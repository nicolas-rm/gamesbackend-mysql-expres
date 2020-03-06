import { Request, Response } from 'express';

class Validations {

    public createValidations(result: any, res: Response) {
        res.status(200).json({
            ok: true,
            Message: 'El Juego Creado Con Exito'
        });
    }

    public readValidations(result: any, res: Response) {
        if (result.length >= 0) {
            res.status(200).json({
                ok: true,
                Games: result
            });
        } else {
            res.status(404).json({
                ok: false,
                Message: 'No Existen Juegos'
            });
        }
    }

    public updateValidations(result: any, res: Response) {
        if (result.affectedRows > 0) {
            res.status(200).json({
                ok: true,
                Message: 'El Juego Actualizado Con Exito'
            });
        } else {
            res.status(404).json({
                ok: false,
                Message: 'El Juego No Existe'
            });
        }
    }

    public deleteValidations(result: any, res: Response) {
        if (result.affectedRows > 0) {
            res.status(200).json({
                ok: true,
                Message: 'El Juego Eliminado Con Exito'
            });
        } else {
            res.status(404).json({
                ok: false,
                Message: 'El Juego No Existe'
            });
        }
    }

    public readValidationsOne(result: any, res: Response) {
        if (result.length > 0) {
            res.status(200).json({
                ok: true,
                Game: result
            });
        } else {
            res.status(404).json({
                ok: false,
                Message: 'El Juego No Existe'
            });
        }
    }

}

export const validations = new Validations();