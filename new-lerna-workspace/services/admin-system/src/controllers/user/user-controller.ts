import Iuser from "../../models/user/Iuser-model";
import { UserService } from "../../services/user/user-service";
import { Request, Response } from "express";
export class UserController {
    constructor(private userService: UserService) { }
    async createUser(req: Request, res: Response) {
        const userData: Iuser = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
        await this.userService.createUser(userData);
        res.status(201).json({
            message: "User created successfully",
        });
    }
}