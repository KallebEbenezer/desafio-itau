import { User } from "../../../domain/models/User";
import { UserContractsRepo } from "../../contracts/user.contracts";
import { idGenerate } from "../../../../utils/random.uuid";
import { UserInputDTO } from "../../../DTO/userDTO/user.dto";

export class CreateUserUseCase {
  constructor(
    private readonly userRepository: UserContractsRepo
  ) {}
  
  async execute(data: UserInputDTO) {
    const id = idGenerate.uuid;
    const user = new User(id, data.name, data.email, data.brokerage);
    await this.userRepository.save(user);
  }
}