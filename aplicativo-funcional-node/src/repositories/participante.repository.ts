import { Repository } from "./base/repository";
import pool from "../db";
import { Participante } from "./interfaces/participante.interface";
import { Pool } from "mysql2/promise";

class ParticipanteRepository extends Repository<Participante> {

    constructor(poo: Pool, table: String) {
        super(poo, table);
    }

    async delete(id: number | string): Promise<Boolean> {
        const query = `DELETE FROM participante_equipe WHERE participante_id = ?`;

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

export const participanteRepository = new ParticipanteRepository(pool, "participante");