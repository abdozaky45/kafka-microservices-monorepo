import { promises } from "dns";
import Iuser from "../../models/user/Iuser-model";
import { UserRepository } from "../../repositories/user/user";

export class UserService {
    constructor(private userRepository: UserRepository) { }
    async createUser(userData: Iuser): Promise<Iuser> {
        const user = await this.userRepository.createUser(userData);
        return user;
    }
}