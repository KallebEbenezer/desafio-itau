import { QuotationContractsRepository } from "../../contracts/quotation.contracts";

export class FetchPriceUseCase {
  constructor(private readonly quotationRepository: QuotationContractsRepository) {}

  async execute(assetId: number) {
    return await this.quotationRepository.fetchPrice(assetId);
  }
} 