import express from 'express';
import { equipeRepository } from '../repositories/equipe.repository';
import { Equipe } from '../repositories/interfaces/equipe.interface';
import {ParticipanteEquipe} from "../repositories/interfaces/participante_equipe.interface";
import {participanteEquipeRepository} from "../repositories/participante_equipe.repository";

export const equipeRouter = express.Router();

equipeRouter.post('/equipe', async (req, res) => {
    const params: Equipe = req.body;
    try {
        const result = await equipeRepository.create(params);
        res.status(201).json(result);
    } catch(error: any) {
        res.status(error.code).json(error);
    }
});

equipeRouter.get('/equipe', async (req, res) => {
    try {
        const result = await equipeRepository.find();
        res.status(200).json(result);
    } catch (error: any) {
        res.status(error.code).json(error);
    }
});

equipeRouter.get('/equipe/:id', async (req, res) => {
    try {
        const id_equipe: number = parseInt(req.params.id);
        const result: Equipe = await equipeRepository.findOne(id_equipe);

        if (result != null) {
            res.status(200).json(result);
        } else {
            res.status(404).json(result);
        }
    } catch (error: any) {
        res.status(error.code).json({ error: error.code, message: error.message });
    }
});

equipeRouter.patch('/equipe', async (req, res) => {
    try {
        const id: number = parseInt(req.body.id);
        const params: Equipe = req.body;

        const result = await equipeRepository.update(id, params);

        res.status(200).json(result);
    } catch (error: any) {
        res.status(error.code).json({ error: error.code, message: error.message });
    }
});

equipeRouter.post('/equipe/vinculaParticipanteEquipe', async (req, res) => {
    try {
        const params: ParticipanteEquipe = req.body;
        const result: ParticipanteEquipe = await participanteEquipeRepository.create(params);

        res.status(200).json(result);

    } catch (error: any) {
        res.status(error.code).json(error);
    }
});

equipeRouter.delete('/equipe/:id', async (req, res) => {
    try {
        const id: number = parseInt(req.params.id);
        const response = await equipeRepository.delete(id);

        res.status(200).json(response);
    } catch (error: any) {
        res.status(error.code).json({ error: error.code, message: error.message });
    }
});