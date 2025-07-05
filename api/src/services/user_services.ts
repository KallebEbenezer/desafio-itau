import { UserRepository } from "../repositories/user_repository";

export class UserService {
    private userRepository: UserRepository;
    constructor() {
        this.userRepository = new UserRepository();
    }

    async searchOperations(userId: number): Promise<any[]> {
        return this.userRepository.searchOperations(userId);
    }
}
