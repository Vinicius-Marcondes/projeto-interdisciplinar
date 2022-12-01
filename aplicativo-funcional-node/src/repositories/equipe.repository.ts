import { Repository } from "./base/repository";
import pool from "../db";
import { Equipe } from "./interfaces/equipe.interface";

class EquipeRepository extends Repository<Equipe> {
    async delete(id: number | string): Promise<Boolean> {
        let query = `DELETE FROM participante_equipe WHERE equipe_id = ?`;

        await pool.query(query, [id]).catch((error) => {
            console.log(error);
            return  {
                code: 500,
                message: "Internal server error",
            }
        });

        query = `DELETE FROM equipe_competicao WHERE equipe_id = ?`;

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

export const equipeRepository = new EquipeRepository(pool, "equipe");