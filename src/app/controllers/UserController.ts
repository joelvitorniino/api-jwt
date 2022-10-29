import { Request, Response } from "express";
import { AppDataSource } from "../../database/data-source";
import { User } from "../models/User";

class UserController {
    index(request: Request, response: Response) {
        return response.send({ userId: request.userId });
    }; 

    async store(request: Request, response: Response) {
        const repository = AppDataSource.getRepository(User);
        const { email, password } = request.body;

        const userExists = await repository.findOne({ where:{ email } });

        if(userExists) {
            return response.sendStatus(409);
        };

        const user = repository.create({ email, password });
        await repository.save(user);

        return response.json(user);
    };
};

export default new UserController();