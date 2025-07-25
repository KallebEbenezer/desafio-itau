import { User } from "../../../domain/models/User";
import { UserContractsRepo } from "../../contracts/user.contracts";
import { idGenerate } from "../../../../utils/random.uuid";

export class CreateUserUseCase {
  constructor(
    private readonly userRepository: UserContractsRepo
  ) {}
  
  async execute(data: { name: string, email: string, brokerage: number }) {
    const id = idGenerate.uuid;
    const user = new User(id, data.name, data.email, data.brokerage);
    await this.userRepository.save(user);
  }
}