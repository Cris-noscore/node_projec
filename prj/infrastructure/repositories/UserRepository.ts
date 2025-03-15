import { UserRepository } from "@domain/repositories/UserRepository"
import { User } from "@domain/entities/User"
import { Database } from "infrastructure/config/Database"

export class UserRepository implements IUserRepository{
    private pool = Database.getConnection()
    async save(user: User) Promise<User> {
        return user 
    }

}