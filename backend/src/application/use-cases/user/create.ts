import { UserContractsRepo } from "../../contracts/user.contracts";
import { UserInputDTO } from "../../../DTO/user.dto";

export class CreateUserUseCase {
  constructor(
    private readonly userRepository: UserContractsRepo
  ) {}
  
  async execute(data: UserInputDTO) {
    try{
      await this.userRepository.save(data);
    }
    catch(err) {
      if(err instanceof Error) throw err
    }
  }
} 