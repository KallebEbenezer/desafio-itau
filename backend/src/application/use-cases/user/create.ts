import { User } from "../../../domain/models/User";
import { UserContractsRepo } from "../../contracts/user.contracts";
import { UserInputDTO } from "../../../DTO/user.dto";

export class CreateUserUseCase {
  constructor(
    private readonly userRepository: UserContractsRepo
  ) {}
  
  async execute(data: UserInputDTO) {
    try{
      const user = new User(data.name, data.email, data.brokerage);
      await this.userRepository.save(user);
    }
    catch(err) {
      if(err instanceof Error) throw err
    }
  }
} 