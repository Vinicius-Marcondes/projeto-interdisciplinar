import express from 'express';
import { Logger } from 'tslog';
import { confrontoRepository } from '../repositories/confronto.repository';
import { Confronto } from '../repositories/interfaces/confronto.interface';

const log: Logger = new Logger({ name: "confrontoRouter" });

export const confrontoRouter = express.Router();

confrontoRouter.post('/confronto', async (req, res) => {
    const params: Confronto = req.body;
    try {
        const result = await confrontoRepository.create(params);
        res.status(201).json(result);
    } catch(error: any) {
        res.status(error.code).json(error);
    }
});

confrontoRouter.get('/confronto', async (req, res) => {
    const result = await confrontoRepository.find();
    res.status(200).json(result);
});

confrontoRouter.get('/confronto/:id', async (req, res) => {
    try {
        const id: number = parseInt(req.params.id);
        const result = await confrontoRepository.findOne(id);
        res.status(200).json(result);
    } catch (error: any) {
        res.status(error.code).json({ error: error.code, message: error.message });
    }
});

confrontoRouter.patch('/confronto', async (req, res) => {
    try {
        const id: number = parseInt(req.body.id);
        const params: Confronto = req.body;
        const result = await confrontoRepository.update(id, params);
        res.status(200).json(result);
    } catch (error: any) {
        res.status(error.code).json({ error: error.code, message: error.message });
    }
});

confrontoRouter.delete('/confronto/:id', async (req, res) => {
    try {
        const id: number = parseInt(req.params.id);
        const response = await confrontoRepository.delete(id);
        res.status(200).json(response);
    } catch (error: any) {
        res.status(error.code).json({ error: error.code, message: error.message });
    }
});