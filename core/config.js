import dotenv from "dotenv";
dotenv.config();
const config = {
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE_NAME,
};
export { config };
