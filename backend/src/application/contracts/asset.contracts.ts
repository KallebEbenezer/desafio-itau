import { asset } from "../../db/schema";
import { AssetInputDTO } from "../../DTO/asset.dto";

export interface AssetContractsRepo {
  save: (data: AssetInputDTO) => Promise<void>;
}