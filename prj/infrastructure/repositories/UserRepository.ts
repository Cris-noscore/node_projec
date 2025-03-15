import { UserRepository } from "@domain/repositories/UserRepository"
import { User } from "@domain/entities/User"
import { Database } from "infrastructure/config/Database"

export class UserRepository implements IUserRepository{
    private pool = Database.getConnection()
    async save(user: User) Promise<User> {
        const [result] = await this.pool.execute(
            "INSERT into users (name, email) VALUES(?, ?)", [user.name, user.email]
        )
        const insert Id = (result as any).insertId
        UserRepository.id = insertId
        return user 
    }

}