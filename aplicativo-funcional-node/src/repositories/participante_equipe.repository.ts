import pool from "../db";
import { Repository } from "./base/repository";
import { ParticipanteEquipe } from "./interfaces/participante_equipe.interface";

class ParticipanteEquipeRepository extends Repository<ParticipanteEquipe> {

}

export const participanteEquipeRepository = new ParticipanteEquipeRepository(pool, "participante_equipe");