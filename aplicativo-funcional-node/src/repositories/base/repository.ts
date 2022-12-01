import { IWrite } from '../interfaces/iwrite.interface';
import { IRead } from '../interfaces/iread.interface';
import mysql, { Pool } from "mysql2/promise";

export abstract class Repository<T> implements IWrite<T>, IRead<T> {

    protected readonly _pool: Pool;
    protected readonly _table: String;

    constructor(pool: Pool, table: String) {
        this._pool = pool;
        this._table = table;
    }

    async create(params: T): Promise<T> {
        const query: string = mysql.format(`INSERT INTO ${this._table} SET ?`, params);
        const res: any = await this._pool.query(query).catch((error) => {
            console.log(error);
            throw {
                code: 500,
                message: "Internal server error",
            }
        });
        params = {
            id: res[0]["insertId"],
            ...params
        };

        return params;
    }

    async delete(id: number | string): Promise<Boolean> {
        const query = `DELETE FROM ${this._table} WHERE id = ?`;

        return await this._pool.query(query, [id]).catch((error) => {
            console.log(error);
            throw {
                code: 500,
                message: "Internal server error",
            }
        }).then((result: any) => {
            return result[0]["affectedRows"] != 0;
        });
    }

    async find(): Promise<Array<T>> {
        const result: Array<T> = [];
        const queryResult: any = await this._pool.query(`SELECT * FROM ${this._table}`).catch((error) => {
            console.log(error);
            throw {
                code: 500,
                message: "Internal server error",
            }
        });

        queryResult[0].forEach((element: T) => {
            result.push(element);
        });

        return result;
    }

    async findOne(id: number | string): Promise<T> {
        const queryString: string = `SELECT * FROM ${this._table} WHERE id = ?`;

        return await this._pool.query(queryString, [id]).catch((error) => {
            console.log(error);
            throw {
                code: 500,
                message: "Internal server error",
            }
        }).then((result) => {
            const [fields] : any = result;
            return fields[0];
        });
    }

    async findBy(field: string, value: any): Promise<Array<T>> {
        const query: string = `SELECT * FROM ${this._table} WHERE ${field} = ?`;
        const result: any = await this._pool.query(query, [value]).catch((error) => {
            console.log(error);
            throw {
                code: 500,
                message: "Internal server error",
            }
        });

        return result[0];
    }

    async update(id: number | string, params: T): Promise<T> {
        const query = `UPDATE ${this._table} SET ? WHERE id = ?`;

        await this._pool.query(query, [params, id]).then(() => {
            params = {
                id: id,
                ...params
            };
        }).catch((error) => {
            console.log(error);
            throw {
                code: 500,
                message: "Internal server error",
            }
        });

        return params;
    }
}
