import { db } from "../core/db.js";
class User {
    constructor() {
        this.database = db;
    }
    async createUser(userLogin, userPassword) {
        await this.database.query(
            "insert into users(login, password) values ($1, $2);",
            [userLogin, userPassword]
        );
    }
    async getUsers() {
        const rows = await this.database.query("select * from users;");
        return rows;
    }
    async checkLogin(login) {
        const rows = await this.database.query(
            "select * from users where login = $1;",
            [login]
        );
        return rows;
    }
}
const userModel = new User();
export { userModel };
