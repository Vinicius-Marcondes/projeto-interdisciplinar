import express from 'express';
import { slalonRepository } from '../repositories/slalon.repository';
import { Slalon } from '../repositories/interfaces/slalon.interface';

export const slalonRouter = express.Router();

slalonRouter.post('/slalon', async (req, res) => {
    const params: Slalon = req.body;
    try {
        const result = await slalonRepository.create(params);
        res.status(201).json(result);
    } catch(error: any) {
        res.status(error.code).json(error);
    }
});

slalonRouter.get('/slalon', async (req, res) => {
    const result: Array<Slalon> = await slalonRepository.find();
    result.sort((a,b) => a.tempo - b.tempo);
    res.status(200).json(result);
});

slalonRouter.get('/slalon/:id', async (req, res) => {
    try {
        const id: number = parseInt(req.params.id);
        const result = await slalonRepository.findOne(id);

        if (result != null) {
            res.status(200).json(result);
        } else {
            res.status(404).json(result);
        }
    } catch (error: any) {
        res.status(error.code).json({ error: error.code, message: error.message });
    }
});

slalonRouter.patch('/slalon', async (req, res) => {
    try {
        const id: number = parseInt(req.body.id);
        const params: Slalon = req.body;
        const result = await slalonRepository.update(id, params);
        res.status(200).json(result);
    } catch (error: any) {
        res.status(error.code).json({ error: error.code, message: error.message });
    }
});

slalonRouter.delete('/slalon/:id', async (req, res) => {
    try {
        const id: number = parseInt(req.params.id);
        const response = await slalonRepository.delete(id);
        res.status(200).json(response);
    } catch (error: any) {
        res.status(error.code).json({ error: error.code, message: error.message });
    }
});