import { AssetRepository } from "../repositories/assets_repository";
import { AssetsDTO } from "../../public/DTO/assets.dto";

export class AssetsService {
    private repository: AssetRepository;
    constructor() {
        this.repository = new AssetRepository();
    }

    async newAsset(assetData: AssetsDTO) {
        try{
            const asset = await this.repository.newAsset(assetData);
            if(!asset) throw new Error("Error at create a new asset!");
            return asset;
        }
        catch(err) {
            if(err instanceof Error) {
                throw Error(`Error: ${err.message}`)
            }
        }
    }
}