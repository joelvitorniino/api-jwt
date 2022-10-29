import { DataSource } from 'typeorm';
import { config } from 'dotenv';

config();

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.POSTGRE_HOST,
    port: 5432,
    username: process.env.POSTGRE_USER,
    password: process.env.POSTGRE_PASSWORD,
    database: "tsauth",
    logging: false,
    entities: ["src/app/models/*.ts"],
    migrations: ["src/app/database/migration/*.ts"]
});