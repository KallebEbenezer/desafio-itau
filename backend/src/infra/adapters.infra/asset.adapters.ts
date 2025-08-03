import { AssetInfraRepository } from "../drizzle.asset.repo";
import { CreateAssetUseCase } from "../../application/use-cases/asset/save";

const assetRepo = new AssetInfraRepository();
const createAssetUseCase = new CreateAssetUseCase(assetRepo);

export const assetUseCases = {
  create: createAssetUseCase
}