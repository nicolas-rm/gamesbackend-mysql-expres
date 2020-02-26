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
const database_1 = __importDefault(require("../database"));
const queryErrors_1 = require("../err/queryErrors");
class GamesController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = (yield database_1.default).getConnection();
            yield database_1.default.then((commandb) => {
                commandb.query('INSERT INTO GAMES SET ?', [req.body]).then(() => {
                    res.status(200).json({
                        ok: true,
                        Game: [req.body]
                    });
                }).catch(err => {
                    queryErrors_1.queryErrors.errors(err);
                    res.status(404).json({
                        ok: false,
                        err
                    });
                });
            });
        });
    }
    read2(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield (yield database_1.default).getConnection();
            try {
                yield connection.beginTransaction();
                const query = 'SELECT * FROM GAMES';
                const games = yield connection.query(query);
                yield connection.commit();
                res.status(200).json({
                    ok: true,
                    games
                });
            }
            catch (error) {
                yield connection.rollback();
                res.status(400).json({
                    ok: true,
                    error
                });
            }
            finally {
                (yield database_1.default).releaseConnection(connection);
            }
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.then((commandb) => {
                commandb.query('SELECT * FROM GAMES').then((games) => {
                    res.status(200).json({
                        ok: true,
                        games
                    });
                }).catch(err => {
                    queryErrors_1.queryErrors.errors(err);
                    res.status(404).json({
                        ok: false,
                        err
                    });
                });
            });
            // const games = pool.
            // console.log(games);
            // await pool.query('SELECT * FROM games', function(err, rows, fields){
            //     if (err) throw err;
            //     const games = rows;
            //     res.json(games);
            // });
            // res.status(200).json({
            //     ok: true,
            //     // Mensaje: 'Game save.'
            // });
        });
    }
    update(req, res) {
        res.json({
            Mensaje: 'Updating a game. #' + req.params.id
        });
    }
    delete(req, res) {
        res.json({
            Mensaje: 'Deleting a game. #' + req.params.id
        });
    }
    readOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.then((commandb) => {
                commandb.query('SELECT * FROM GAMES WHERE ID = ?', [Number(id)]).then((game) => {
                    res.status(200).json({
                        ok: true,
                        game
                    });
                }).catch(err => {
                    queryErrors_1.queryErrors.errors(err);
                    res.status(404).json({
                        ok: false,
                        err
                    });
                });
            });
        });
    }
}
const gamesController = new GamesController();
exports.default = gamesController;
