import { Repository } from "./base/repository";
import pool from "../db";
import { Competicao } from "./interfaces/competicao.interface";

class CompeticaoRepository extends Repository<Competicao> {
    async delete(id: number | string): Promise<Boolean> {
        const query = `DELETE FROM equipe_competicao WHERE competicao_id = ?`;

        await pool.query(query, [id]).catch((error) => {
            console.log(error);
            return  {
                code: 500,
                message: "Internal server error",
            }
        });

        return super.delete(id);
    }
}

export const competicaoRepository = new CompeticaoRepository(pool, "competicao");