"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Validations {
    createValidations(result, res) {
        res.status(200).json({
            ok: true,
            Game: result
        });
    }
    readValidations(result, res) {
        res.status(200).json({
            ok: true,
            Games: result
        });
    }
    updateValidations() {
    }
    deleteValidations() {
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
                Message: 'The game doesn´t exists'
            });
        }
    }
}
exports.validations = new Validations();
