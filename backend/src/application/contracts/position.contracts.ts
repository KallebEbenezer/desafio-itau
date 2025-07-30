import { PositionInputDTO, PositionOutPutDTO } from "../../DTO/position.dto";

export interface PositionContractsRepository {
  save: (data: PositionInputDTO) => Promise<void>;
  update: (data: PositionInputDTO) => Promise<void>;
  find: (data: { userId: number, assetId: number }) => Promise<PositionOutPutDTO[]>;
}