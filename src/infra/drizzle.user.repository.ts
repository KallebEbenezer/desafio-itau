import { db } from "../db";
import { user } from "../db/schema";
import { User } from "../domain/types/user.types";
import { UserContractsRepo } from "../application/contracts/user.contracts";

export class UserInfraRepository implements UserContractsRepo {
  async save(data: User): Promise<void> { 
     await db.insert(user).values({ 
      name: data.name, 
      email: data.email, 
      brokerage: 
      data.brokerage 
    })
  }
  async getAll(): Promise<User[]>{
   return await db.query.user.findMany(); 
  }
}