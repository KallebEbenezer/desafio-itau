import { UserRepository } from "../repositories/user_repository";
import { User } from "../../settings/database/entities/User";
interface DataUser {
    username: string;
    email: string;
    brokerage: number;
}

export class UserService {
    private userRepository: UserRepository;
    constructor() {
        this.userRepository = new UserRepository();
    }

    async createUser(userData: DataUser): Promise<User> {
        return this.userRepository.create(userData);
    }
}
