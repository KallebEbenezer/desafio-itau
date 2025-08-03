import { QuotationInputDTO } from "../../DTO/quotation.dto";

export interface QuotationContractsRepository {
  save: (data: QuotationInputDTO) => Promise<void>;
  fetchPrice: (assetId: number) => Promise<number | undefined>;
}