import pool from "../db";
import { Repository } from "./base/repository";
import {Slalon} from "./interfaces/slalon.interface";

class SlalonRepository extends Repository<Slalon> {

    async find() {
        const result: Array<Slalon> = [];
        const queryResult: any = await pool.query(`SELECT * FROM ${this._table} as s join equipe as e where s.equipe_id = e.id`).catch((error) => {
            console.log(error);
            throw {
                code: 500,
                message: "Internal server error",
            }
        });

        queryResult[0].forEach((element: Slalon) => {
            result.push(element);
        });

        return result;
    }
}

export const slalonRepository = new SlalonRepository(pool, "slalon");