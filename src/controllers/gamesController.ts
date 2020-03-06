import { Request, Response } from 'express';

import pool from '../database';
import { queryErrors } from '../err/queryErrors';
import { validations } from '../validations/validations';
import { uploadsController } from './uploadsController';


class GamesController {

    public async create(req: Request, res: Response): Promise<void> {
        
        // const nameFile = uploadsController.upload(req, res);
        // req.body.IMAGE = nameFile;
        const connection = await (await pool).getConnection();
        try {
            await connection.beginTransaction();
            console.log('ESTE ES EL BODY');
            console.log([req.body]);
            const query = 'INSERT INTO GAMES SET ?';
            await connection.query(query, [req.body]);
            await connection.commit();
            validations.createValidations(req.body, res);
        } catch (err) {
            await connection.rollback();
            queryErrors.errors(err, res);
        } finally {
            (await pool).releaseConnection(connection);
        }
    }

    public async read(req: Request, res: Response): Promise<void> {
        const connection = await (await pool).getConnection();
        try {
            await connection.beginTransaction();
            const query = 'SELECT * FROM GAMES';
            const games = await connection.query(query);
            await connection.commit();
            validations.readValidations(games, res);
        } catch (err) {
            await connection.rollback();
            queryErrors.errors(err, res);
        } finally {
            (await pool).releaseConnection(connection);
        }
    }

    async read2(eq: Request, res: Response): Promise<void> {
        await pool.then((cmd) => {
            cmd.query('SELECT * FROM GAMESS').then((GAMES) => {
                console.log(GAMES);
            }).catch((error) => {
                console.log(error);
            });
        });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const connection = await (await pool).getConnection();
        const { id } = req.params;
        try {
            await connection.beginTransaction();
            const query = 'UPDATE GAMES SET ? WHERE ID = ?';
            const game = await connection.query(query, [req.body, Number(id)]);
            console.log(game);
            await connection.commit();
            validations.updateValidations(game, res);
        } catch (err) {
            await connection.rollback();
            queryErrors.errors(err, res);
        } finally {
            (await pool).releaseConnection(connection);
        }
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const connection = await (await pool).getConnection();
        const { id } = req.params;
        try {
            await connection.beginTransaction();
            const query = 'DELETE FROM GAMES WHERE ID = ?';
            const game = await connection.query(query, [Number(id)]);
            await connection.commit();
            validations.deleteValidations(game, res);
        } catch (err) {
            await connection.rollback();
            queryErrors.errors(err, res);
        } finally {
            (await pool).releaseConnection(connection);
        }
    }

    public async readOne(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const connection = await (await pool).getConnection();
        try {
            await connection.beginTransaction();
            const query = 'SELECT * FROM GAMES WHERE ID = ?';
            const game = await connection.query(query, [Number(id)]);
            await connection.commit();
            validations.readValidationsOne(game, res);
        } catch (err) {
            await connection.rollback();
            queryErrors.errors(err, res);
        } finally {
            (await pool).releaseConnection(connection);
        }

    }

}


const gamesController = new GamesController();
export default gamesController;