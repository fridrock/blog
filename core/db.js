import pg from "pg";
import { config } from "./config.js";
const { Pool } = pg;
class Database {
    constructor() {
        this.pool = new Pool(config);
    }
    async query(queryString, queryParams) {
        const { rows, fields } = await this.pool.query(
            queryString,
            queryParams
        );
        return rows;
    }
}
console.log(config);
const db = new Database();
export { db };
