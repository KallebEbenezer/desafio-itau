import { Repository } from "typeorm";
import { MainDataSource } from "../../settings/database/data-source";
import { Asset } from "../../settings/database/entities/Assets";
import { AssetsDTO } from "../../public/DTO/assets.dto";

export class AssetRepository {
    private repository: Repository<Asset>;
    constructor() {
        this.repository = MainDataSource.getRepository(Asset);
    }

    async newAsset(assetData: AssetsDTO): Promise<Asset> {
        return this.repository.save(assetData);
    }

    async findById(id: number) {
        return await this.repository.findOneBy({ id: id });
    }
}