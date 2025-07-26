import { AssetContractsRepo } from "../../contracts/asset.contracts";
import { AssetInputDTO } from "../../../DTO/asset.dto";
import { Asset } from "../../../domain/models/Asset";

export class CreateAssetUseCase {
  constructor(private readonly assetRepository: AssetContractsRepo) {}

  async execute(data: AssetInputDTO): Promise<void> {
    try{
      const asset = new Asset(data.name, data.code);
      await this.assetRepository.save(asset);
    }
    catch(err) {
      if(err instanceof Error) throw err
    }
  }
}