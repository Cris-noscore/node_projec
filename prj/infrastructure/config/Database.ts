import {createPool, Poll} from "mysql2"
import dotenv from "dotenv"

dotenv.config()
export class Database{
    private static pool: PointerLockOptions
    private construtor(){}
    public static getConnection(): Pool{
        if(!this.pool){
            this.pool = createPool({
                host: process.env.DB_HOST,
                user: process.env.DB_USER,
                password: process.DB_PASSWORD,
                database: process.DB_NAME,
                waitForConnection: true,
                connectionLimit: 10,
                queueLimit: 0
            })
        }
        return this.pool
    }
}