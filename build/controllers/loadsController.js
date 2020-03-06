"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
// import fileUplo from 'express-fileupload';
class LoadsController {
    readOne(req, res) {
        const title = req.params.title;
        var pathImage = path_1.default.resolve(__dirname, `../../uploads/${title}`);
        const pathNoImage = path_1.default.resolve(__dirname, '../../assets/no-img.jpg');
        if (!fs_1.default.existsSync(pathImage)) {
            res.sendFile(pathNoImage);
        }
        else {
            res.sendFile(pathImage);
        }
    }
}
exports.loadsController = new LoadsController();
