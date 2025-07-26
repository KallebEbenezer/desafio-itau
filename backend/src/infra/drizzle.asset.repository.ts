import { AssetContractsRepo } from "../application/contracts/asset.contracts";
import { AssetInputDTO } from "../DTO/asset.dto";
import { db } from "../db";
import { asset } from "../db/schema";

export class AssetInfraRepository implements AssetContractsRepo {
  async save(data: AssetInputDTO) {
    try{
      await db.insert(asset).values({
        name: data.name,
        code: data.code
      })
    }
    catch(err) {
      if(err instanceof Error) throw err
    }
  }
}