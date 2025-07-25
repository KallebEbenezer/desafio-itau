import { db } from "../db";
import { user } from "../db/schema";
import { User } from "../domain/types/user.types";
import { UserContractsRepo } from "../application/contracts/user.contracts";
import { UserInputDTO, UserOutputDTO } from "../DTO/userDTO/user.dto";
import { idGenerate } from "../../utils/random.uuid";

export class UserInfraRepository implements UserContractsRepo {
  async save(data: UserInputDTO): Promise<User> { 
    // await db.insert(user).values({ 
    //   name: data.name, 
    //   email: data.email, 
    //   brokerage: 
    //   data.brokerage 
    // })
    return {
      id: idGenerate.uuid,
      brokerage: data.brokerage,
      email: data.email,
      name: data.name
    }
  }
  async getAll(): Promise<User[]>{
   return await db.query.user.findMany(); 
  }
}