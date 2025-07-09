import { MainDataSource } from "../../settings/database/data-source"; 
import { Repository } from "typeorm";
import { Quotation } from "../../settings/database/entities/Quotation";
import { Asset } from "../../settings/database/entities/Assets";
import { Position } from "../../settings/database/entities/Position";

interface QuotationToSaveData {
    asset: Asset;
    price: number;
}
interface QuotationData {
    userId: number;
    assetId: number
    price: number
}

export class QuotationRepository {
    private repository: Repository<Quotation>
    private assetsRepository: Repository<Asset>;
    private positionRepository: Repository<Position>;
    constructor() {
        this.repository = MainDataSource.getRepository(Quotation);
        this.assetsRepository = MainDataSource.getRepository(Asset);
        this.positionRepository = MainDataSource.getRepository(Position)
    }

    async findAssets(assetId: number): Promise<Asset | null> {
        const asset = this.assetsRepository.findOneBy({ id: assetId });
        return asset;
    }

    async findPositions(assetId: number): Promise<Position[]> {
        return await this.positionRepository.find({
            where: { assets: { id: assetId } }
        })
    }

    async setNewPL(newPosition: Position): Promise<void> {
        await this.positionRepository.save(newPosition);
    }   

    async newQuotation(quotationData: QuotationToSaveData): Promise<Quotation> {
        try {
            const newQuotation = this.repository.create({
                assets: quotationData.asset,
                price: quotationData.price
            })
            return await this.repository.save(newQuotation);
        }
        catch (err) {
            if (err instanceof Error) throw Error(`Error: ${err.message}`)
            throw err;
        }
    }
}