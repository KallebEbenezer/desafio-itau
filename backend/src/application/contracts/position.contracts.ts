import { positionType } from "../../domain/types/position.types";
import { PositionInputDTO, PositionOutPutInterface } from "../../DTO/position.dto";

export interface PositionContractsRepository {
  save: (data: PositionInputDTO) => Promise<void>;
  find: (data: { userId: number, assetId: number }) => Promise<PositionOutPutInterface[]>;
  update: (data: PositionInputDTO) => Promise<void>;
}