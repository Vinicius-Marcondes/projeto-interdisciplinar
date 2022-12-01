import express from 'express';
import { Logger } from 'tslog';
import { competicaoRepository } from '../repositories/competicao.repository';
import { Competicao } from '../repositories/interfaces/competicao.interface';
import {confrontoRepository} from "../repositories/confronto.repository";
import { Confronto } from '../repositories/interfaces/confronto.interface';
import { Chave } from '../repositories/interfaces/chave.interface';
import {Round} from "../repositories/interfaces/round.interface";
import { Team } from '../repositories/interfaces/team.interface';
import { Match } from '../repositories/interfaces/match.interface';
import {EquipeCompeticao} from "../repositories/interfaces/equipe_competicao.interface";
import {equipeCompeticaoRepository} from "../repositories/equipe_competicao.repository";

const log: Logger = new Logger({ name: "competicaoRouter" });

export const competicaoRouter = express.Router();

competicaoRouter.post('/competicao', async (req, res) => {
    const params: Competicao = req.body;
    try {
        const result = await competicaoRepository.create(params);
        res.status(201).json(result);
    } catch(error: any) {
        res.status(error.code).json(error);
    }
});

competicaoRouter.get('/competicao', async (req, res) => {
    const result = await competicaoRepository.find();
    res.status(200).json(result);
});

competicaoRouter.get('/competicao/:id', async (req, res) => {
    try {
        const id: number = parseInt(req.params.id);
        const result = await competicaoRepository.findOne(id);

        if (result != null) {
            res.status(200).json(result);
        } else {
            res.status(404).json(result);
        }
    } catch (error: any) {
        res.status(error.code).json({ error: error.code, message: error.message });
    }
});

competicaoRouter.get('/competicao/chaves/:id', async (req, res) => {
    try {
        const id: number = parseInt(req.params.id);
        const result: Array<Confronto> = await confrontoRepository.findByCompeticaoId(id);

        result.sort((a,b) => a.rodada - b.rodada);

        let ultimaRodada: number = result[result.length - 1].rodada;
        let chave: Chave = {rounds:[]};

        for (let i = 1; i <= ultimaRodada; ++i) {
            let rodada: Array<Confronto> = result.filter(p => {
                return p.rodada === i;
            });

            const matches: Array<any> = []

            rodada.forEach((p: Confronto) => {
                const team1: any = {name: p.equipe_1, velocidade: p.velocidade_equipe_1, score: p.tempo_equipe_1, id_equipe: p.id_equipe_1};
                const team2: any = {name: p.equipe_2, velocidade: p.velocidade_equipe_2, score: p.tempo_equipe_2, id_equipe: p.id_equipe_2};

                if (ultimaRodada === i) {
                    const teams = [];
                    teams.push(team1);
                    matches.push({teams: teams});
                } else {
                    const teams = [];
                    teams.push(team1);
                    matches.push({teams: teams});
                    teams[0] = team2;
                    matches.push({teams: teams});
                }
            })

            const round: Round = {
                type: ultimaRodada === i ? 'Final' : 'Winnerbracket',
                matches: matches
            }

            chave.rounds.push(round);
        }

        res.status(200).json(chave);


    } catch (error: any) {
        res.status(error.code).json({ error: error.code, message: error.message });
    }
});

competicaoRouter.patch('/competicao', async (req, res) => {
    try {
        const id: number = parseInt(req.body.id);
        const params: Competicao = req.body;
        const result = await competicaoRepository.update(id, params);
        res.status(200).json(result);
    } catch (error: any) {
        res.status(error.code).json({ error: error.code, message: error.message });
    }
});

competicaoRouter.post('/competicao/vinculaEquipeCompeticao', async (req, res) => {
    try {
        const params: EquipeCompeticao = req.body;
        const result: EquipeCompeticao = await equipeCompeticaoRepository.create(params);

        res.status(200).json(result);

    } catch (error: any) {
        res.status(error.code).json(error);
    }
});

competicaoRouter.delete('/competicao/:id', async (req, res) => {
    try {
        const id: number = parseInt(req.params.id);
        const response = await competicaoRepository.delete(id);
        res.status(200).json(response);
    } catch (error: any) {
        res.status(error.code).json({ error: error.code, message: error.message });
    }
});