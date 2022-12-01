import express from 'express';
import { participanteRepository } from '../repositories/participante.repository';
import { participanteEquipeRepository } from '../repositories/participante_equipe.repository';
import { Participante } from '../repositories/interfaces/participante.interface';
import { ParticipanteEquipe } from '../repositories/interfaces/participante_equipe.interface';

export const participanteRouter = express.Router();

participanteRouter.post('/participante', async (req, res) => {
    const params: Participante = req.body;
    try {
        const result = await participanteRepository.create(params);
        
        res.status(201).json(result);
    } catch(error: any) {
        res.status(error.code).json(error);
    }
});

participanteRouter.get('/participante', async (req, res) => {
    try{
        const result = await participanteRepository.find();
        res.status(200).json(result);
    } catch (error: any) {
        res.status(error.code).json(error);
    }
});

participanteRouter.get('/participante/:id', async (req, res) => {
    try {
        const id: number = parseInt(req.params.id);
        const result: Participante = await participanteRepository.findOne(id);

        if (result != null) {
            res.status(200).json(result);
        } else {
            res.status(404).json(result);
        }
    } catch (error: any) {
        res.status(error.code).json({ error: error.code, message: error.message });
    }
});

participanteRouter.get('/participante/equipe/:id', async (req, res) => {
    try {
        const id: number = parseInt(req.params.id);
        const result = await participanteEquipeRepository.findBy("equipe_id", id);

        res.status(200).json(result);
    } catch (error: any) {
        res.status(error.code).json({ error: error.code, message: error.message });
    }
});

participanteRouter.patch('/participante', async (req, res) => {
    try {
        const id: number = parseInt(req.body.id);
        const params: Participante = req.body;

        const result = await participanteRepository.update(id, params);

        res.status(200).json(result);
    } catch (error: any) {
        res.status(error.code).json({ error: error.code, message: error.message });
    }
});

participanteRouter.delete('/participante/:id', async (req, res) => {
    try {
        const id: number = parseInt(req.params.id);
        const response = await participanteRepository.delete(id);

        res.status(200).json(response);
    } catch (error: any) {
        res.status(500);
    }
},

participanteRouter.post('/participante/equipe', async (req, res) => {
    const params: ParticipanteEquipe = req.body;
    try {
        const result = await participanteEquipeRepository.create(params);
        
        res.status(201).json(result);
    } catch(error: any) {
        res.status(error.code).json(error);
    }
}));