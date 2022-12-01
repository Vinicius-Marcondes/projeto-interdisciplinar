

import mysql, {Pool} from 'mysql2/promise';
import * as dotenv from 'dotenv';

dotenv.config();

class DBConnection {
    public readonly _pool: Pool;
    constructor() {
        this._pool = mysql.createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            port: 3307,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            namedPlaceholders: true
        });
    }
}

export default new DBConnection()._pool;