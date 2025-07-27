import { AssetInfraRepository } from "../drizzle.asset.repository";
import { CreateAssetUseCase } from "../../application/use-cases/asset/create";

const assetRepo = new AssetInfraRepository();
const createAssetUseCase = new CreateAssetUseCase(assetRepo);

export const assetUseCases = {
  create: createAssetUseCase
}