import { UserModel } from "../model/UserModel";
import { ErrorUtil } from "../util/ErrorUtil";

export class UserService {
    async register(user: any) {
        try {
            await UserModel.create(user);
        } catch(e) {
            throw new ErrorUtil("Object of user unknown!");
        };
    };

    async login(user: any) {
        try {
            await UserModel.findOne(user);
        } catch(e) {
            throw new ErrorUtil("User not found");
        }
    }
}