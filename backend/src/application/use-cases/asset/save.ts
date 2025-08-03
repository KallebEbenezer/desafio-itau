import { AssetContractsRepo } from "../../contracts/asset.contracts";
import { AssetInputDTO } from "../../../DTO/asset.dto";

export class CreateAssetUseCase {
  constructor(private readonly assetRepository: AssetContractsRepo) {}

  async execute(data: AssetInputDTO): Promise<void> {
    try{
      await this.assetRepository.save(data);
    }
    catch(err) {
      if(err instanceof Error) throw err
    }
  }
}