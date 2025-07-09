import { Request, Response } from "express";
import { OperationsService } from "../services/operations_service";
import { OperationData } from "../../public/DTO/operation.dto";
import { Operation } from "../../settings/database/entities/Operation";

const operationsService = new OperationsService();

export const createOperation = async(req: Request, res: Response): Promise<Operation | any> => {
    try {
        const operationData: OperationData = req.body;
        const newOperation = await operationsService.creteOperation(operationData);
        res.status(201).json(newOperation);
    } catch (err: any) {
        console.log(err)
        res.status(500).json({ error: err.message });
    }
}

export const getAllOperations = async(req: Request, res: Response): Promise<Operation[] | any> => {
    try {
        const operations = await operationsService.getAllOperations();
        return res.status(200).json(operations);
    } catch (err: any) {
        return res.status(500).json({ error: err.message });
    }
}