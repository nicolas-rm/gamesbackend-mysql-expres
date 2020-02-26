import { Request, Response } from 'express';

import pool from '../database';
import { queryErrors } from '../err/queryErrors';


class GamesController {

    public async create(req: Request, res: Response): Promise<void> {

        const connection = (await pool).getConnection();

        await pool.then((commandb) => {
            commandb.query('INSERT INTO GAMES SET ?', [req.body]).then(() => {
                res.status(200).json({
                    ok: true,
                    Game: [req.body]
                });
            }).catch(err => {
                queryErrors.errors(err);
                res.status(404).json({
                    ok: false,
                    err
                });
            });
        });
    }

    public async read2(req: Request, res: Response): Promise<void> {
        const connection = await (await pool).getConnection();
        try {
            await connection.beginTransaction();
            const query = 'SELECT * FROM GAMES';
            const games = await connection.query(query);
            await connection.commit();
            res.status(200).json({
                ok: true,
                games
            });
        } catch (error) {
            await connection.rollback();
            res.status(400).json({
                ok: true,
                error
            });
        }
        finally {
            (await pool).releaseConnection(connection);
        }
    }

    public async read(req: Request, res: Response): Promise<void> {
        await pool.then((commandb) => {
            commandb.query('SELECT * FROM GAMES').then((games) => {
                res.status(200).json({
                    ok: true,
                    games
                });
            }).catch(err => {
                queryErrors.errors(err);
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
    }

    public update(req: Request, res: Response) {
        res.json({
            Mensaje: 'Updating a game. #' + req.params.id
        });
    }

    public delete(req: Request, res: Response) {
        res.json({
            Mensaje: 'Deleting a game. #' + req.params.id
        });
    }

    public async readOne(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        await pool.then((commandb) => {
            commandb.query('SELECT * FROM GAMES WHERE ID = ?', [Number(id)]).then((game) => {
                res.status(200).json({
                    ok: true,
                    game
                });
            }).catch(err => {
                queryErrors.errors(err);
                res.status(404).json({
                    ok: false,
                    err
                });
            });
        });
    }

}


const gamesController = new GamesController();
export default gamesController;