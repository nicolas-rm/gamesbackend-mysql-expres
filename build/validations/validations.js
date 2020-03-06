"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Validations {
    createValidations(result, res) {
        res.status(200).json({
            ok: true,
            Message: 'El Juego Creado Con Exito'
        });
    }
    readValidations(result, res) {
        if (result.length >= 0) {
            res.status(200).json({
                ok: true,
                Games: result
            });
        }
        else {
            res.status(404).json({
                ok: false,
                Message: 'No Existen Juegos'
            });
        }
    }
    updateValidations(result, res) {
        if (result.affectedRows > 0) {
            res.status(200).json({
                ok: true,
                Message: 'El Juego Actualizado Con Exito'
            });
        }
        else {
            res.status(404).json({
                ok: false,
                Message: 'El Juego No Existe'
            });
        }
    }
    deleteValidations(result, res) {
        if (result.affectedRows > 0) {
            res.status(200).json({
                ok: true,
                Message: 'El Juego Eliminado Con Exito'
            });
        }
        else {
            res.status(404).json({
                ok: false,
                Message: 'El Juego No Existe'
            });
        }
    }
    readValidationsOne(result, res) {
        if (result.length > 0) {
            res.status(200).json({
                ok: true,
                Game: result
            });
        }
        else {
            res.status(404).json({
                ok: false,
                Message: 'El Juego No Existe'
            });
        }
    }
}
exports.validations = new Validations();
