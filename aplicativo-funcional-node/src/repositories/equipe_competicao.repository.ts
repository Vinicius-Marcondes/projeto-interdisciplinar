import pool from "../db";
import { Repository } from "./base/repository";
import { ParticipanteEquipe } from "./interfaces/participante_equipe.interface";
import {EquipeCompeticao} from "./interfaces/equipe_competicao.interface";

class EquipeCompeticaoRepository extends Repository<EquipeCompeticao> {

}

export const equipeCompeticaoRepository = new EquipeCompeticaoRepository(pool, "equipe_competicao");