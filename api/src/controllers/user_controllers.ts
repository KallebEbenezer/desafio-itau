import { Request, Response } from "express";
import { UserService } from "../services/user_services";

const userService = new UserService();

export const searchOperations = asynce(req: Request, res: Response): Promise<Response> => {
    try{
        const userId = parseInt(req.params.userId, 10);
        const operations = await userService.searchOperations(userId);
        return res.status(200).json(operations);
    }
    catch(err: any) {
        return res.status(500).json({err: err.message})
    }
}