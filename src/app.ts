import "reflect-metadata";
import express from 'express';
import routes from './routes';
import { AppDataSource } from "./data-source";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(3000, () => {
    console.log("API started!")
});

AppDataSource.initialize()
    .then(() => console.log("Database connected!"))
    .catch((e) => console.log("Error on connection of database!", e));