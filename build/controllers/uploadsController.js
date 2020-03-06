"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class UploadsController {
    // public app: Application;
    upload(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
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
                const patURL = path_1.default.resolve(__dirname, `../../uploads/${req.params.imagen}`);
                if (fs_1.default.existsSync(patURL)) {
                    fs_1.default.unlinkSync(patURL);
                }
            }
            // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
            const archivo = req.files.archivo;
            let nombreArchivo = archivo.name.split('.');
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
            const nombreFile = req.params.title + date.getFullYear() + (date.getMonth() + 1) + (date.getDay() + 1) + date.getMilliseconds();
            const name = nombreFile + '.' + extension;
            // Use the mv() method to place the file somewhere on your server
            archivo.mv(`uploads/${name}`, (err) => {
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
        });
    }
}
exports.uploadsController = new UploadsController();
