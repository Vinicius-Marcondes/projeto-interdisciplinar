import { Repository } from "./base/repository";
import pool from "../db";
import { Confronto } from "./interfaces/confronto.interface";

class ConfrontoRepository extends Repository<Confronto> {

    async find(): Promise<Array<Confronto>> {
        const result: Array<Confronto> = [];
        const queryResult: any = await this._pool.query(`SELECT c.id, ef.nome as equipe_1, es.nome as equipe_2, c.tempo_equipe_1, c.tempo_equipe_2, c.rodada FROM ${this._table} as c join equipe as ef on c.id_equipe_1 = ef.id join equipe as es on c.id_equipe_2 = es.id`).catch((error) => {
            console.log(error);
        });

        queryResult[0].forEach((element: Confronto) => {
            result.push(element);
        });

        return result;
    }

    async findByCompeticaoId(value: number): Promise<Array<Confronto>> {
        const query: string = `SELECT c.id_equipe_1, c.id_equipe_2, ef.nome as equipe_1, es.nome as equipe_2, c.tempo_equipe_1, c.tempo_equipe_2, c.velocidade_equipe_1, c.velocidade_equipe_2, c.rodada FROM ${this._table} as c join equipe as ef on c.id_equipe_1 = ef.id join equipe as es on c.id_equipe_2 = es.id WHERE c.competicao_id = ${value}`;
        const result: any = await pool.query(query, [value]).catch((error) => {
            console.log(error);
            throw {
                code: 500,
                message: "Internal server error",
            }
        });

        return result[0];
    }
}

export const confrontoRepository = new ConfrontoRepository(pool, "confronto");