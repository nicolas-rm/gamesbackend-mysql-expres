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
const validations_1 = require("../validations/validations");
class GamesController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield (yield database_1.default).getConnection();
            try {
                yield connection.beginTransaction();
                const query = 'INSERT INTO GAMES SET ?';
                yield connection.query(query, [req.body]);
                yield connection.commit();
                validations_1.validations.createValidations(req.body, res);
            }
            catch (err) {
                yield connection.rollback();
                queryErrors_1.queryErrors.errors(err, res);
            }
            finally {
                (yield database_1.default).releaseConnection(connection);
            }
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield (yield database_1.default).getConnection();
            try {
                yield connection.beginTransaction();
                const query = 'SELECT * FROM GAMES';
                const games = yield connection.query(query);
                yield connection.commit();
                validations_1.validations.readValidations(games, res);
            }
            catch (err) {
                yield connection.rollback();
                queryErrors_1.queryErrors.errors(err, res);
            }
            finally {
                (yield database_1.default).releaseConnection(connection);
            }
        });
    }
    read2(eq, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.then((cmd) => {
                cmd.query('SELECT * FROM GAMESS').then((GAMES) => {
                    console.log(GAMES);
                }).catch((error) => {
                    console.log(error);
                });
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield (yield database_1.default).getConnection();
            const { id } = req.params;
            try {
                yield connection.beginTransaction();
                const query = 'UPDATE GAMES SET ? WHERE ID = ?';
                const game = yield connection.query(query, [req.body, Number(id)]);
                console.log(game);
                yield connection.commit();
                validations_1.validations.updateValidations(game, res);
            }
            catch (err) {
                yield connection.rollback();
                queryErrors_1.queryErrors.errors(err, res);
            }
            finally {
                (yield database_1.default).releaseConnection(connection);
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield (yield database_1.default).getConnection();
            const { id } = req.params;
            try {
                yield connection.beginTransaction();
                const query = 'DELETE FROM GAMES WHERE ID = ?';
                const game = yield connection.query(query, [Number(id)]);
                yield connection.commit();
                validations_1.validations.deleteValidations(game, res);
            }
            catch (err) {
                yield connection.rollback();
                queryErrors_1.queryErrors.errors(err, res);
            }
            finally {
                (yield database_1.default).releaseConnection(connection);
            }
        });
    }
    readOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const connection = yield (yield database_1.default).getConnection();
            try {
                yield connection.beginTransaction();
                const query = 'SELECT * FROM GAMES WHERE ID = ?';
                const game = yield connection.query(query, [Number(id)]);
                yield connection.commit();
                validations_1.validations.readValidationsOne(game, res);
            }
            catch (err) {
                yield connection.rollback();
                queryErrors_1.queryErrors.errors(err, res);
            }
            finally {
                (yield database_1.default).releaseConnection(connection);
            }
        });
    }
}
const gamesController = new GamesController();
exports.default = gamesController;
