import { UserContractsRepo } from "../../contracts/user.contracts";

export class FindAllUseCase {
  constructor(
    private readonly userRepository: UserContractsRepo
  ) {}
  
  async execute() {
    return await this.userRepository.getAll();
  }
}