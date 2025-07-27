import { positionType } from "../../domain/types/position.types";
import { PositionInputDTO } from "../../DTO/position.dto";

export interface PositionContractsRepository {
  save: (data: PositionInputDTO) => Promise<void>;
  find: (data: {userId: number, assetId: number}) => Promise<positionType[]>
}