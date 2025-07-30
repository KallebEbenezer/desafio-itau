import { AssetInputDTO } from "../../DTO/asset.dto";

export interface AssetContractsRepo {
  save: (data: AssetInputDTO) => Promise<void>;
}