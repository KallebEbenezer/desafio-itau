import { Request, Response } from "express";
import { UserService } from "../services/user_services";

import { UserDTO } from "../../public/DTO/user.dto";

const userService = new UserService();

export const createUser = async (req: Request, res: Response): Promise<any> => {
    try {
        const { username, email, brokerage }: UserDTO = req.body;
        console.log(req.body);  
        const newUser = await userService.createUser({ username, email, brokerage } as UserDTO);
        res.status(201).json(newUser);
    } catch (err: any) {
        console.log(err);
        return res.status(500).json({ error: err.message });
    }
}
