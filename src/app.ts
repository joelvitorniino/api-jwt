import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/', (request: Request, response: Response) => {
    response.send("Hello, World!");
}); 

app.listen(3000, () => {
    console.log("API started!");
});