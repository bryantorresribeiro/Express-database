import { Client } from "pg";

const database = new Client({
    user: "bryan",
    host: "localhost",
    database: "bryan",
    password: "1234",
    port: 5432,
});;

export const startDatabase = async () => {
    await database.connect();
};

export default database;