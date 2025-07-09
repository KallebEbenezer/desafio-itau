import { Request, Response } from "express";
import { AssetsService } from "../services/assets_service";
import { AssetsDTO } from "../../public/DTO/assets.dto";
import { Asset } from "../../settings/database/entities/Assets";

const assetsService = new AssetsService();

export const newAsset = async( req: Request, res: Response ): Promise<Asset | any> => {
    try{
        const assetData: AssetsDTO = req.body;
        const newAsset = await assetsService.newAsset(assetData);
        if(!newAsset) throw new Error("Error at create a new Asset");
        return res.status(201).json(newAsset);
    }
    catch(err) {
        if(err instanceof Error) {
            throw Error(`Error: ${err.message}`);
        }
    }
}