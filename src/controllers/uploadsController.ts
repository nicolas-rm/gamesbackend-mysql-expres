import { Request, Response } from 'express';
// import fileUplo from 'express-fileupload';
import gamesController from './gamesController';
import fs from 'fs';
import path from 'path';




class UploadsController {
    // public app: Application;


    public async upload(req: Request, res: Response): Promise<any> {

        console.log(' VALOR DE ID ');
        console.log(req.params.id);
        // this.app.put('/upload', function (req: any, res: any) {
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).json({
                ok: false,
                Message: 'NO SE A SELECCIONADO NINGUN ARCHIVO'
            });
        }

        if (req.params.imagen) {
            const patURL = path.resolve(__dirname, `../../uploads/${req.params.imagen}`);
        
            if(fs.existsSync(patURL)){
                fs.unlinkSync(patURL);
            }

        }

        // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
        const archivo: any = req.files.archivo;
        let nombreArchivo: [] = archivo.name.split('.');


        /* EXTESIONES PERMITIDAS */
        const extension = nombreArchivo[nombreArchivo.length - 1];
        const extensiones = ['jpg', 'jpeg', 'png'];

        if (extensiones.indexOf(extension) < 0) {
            return res.status(400).json({
                ok: false,
                err: {
                    Message: 'LAS EXTENSIONES PERMITIDAS SON ' + extensiones.join(', ')
                },
                extension
            });
        }
        const date = new Date();
        const nombreFile: string = req.params.title + date.getFullYear() + (date.getMonth() + 1) + (date.getDay() + 1) + date.getMilliseconds();
        const name = nombreFile + '.' + extension;
        // Use the mv() method to place the file somewhere on your server
        archivo.mv(`uploads/${name}`, (err: any) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }

            res.status(200).json({
                ok: true,
                Message: 'Archivo Subido Correctamente',
                name
            });
        });
        // });
    }
}

export const uploadsController = new UploadsController();
