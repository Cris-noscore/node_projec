import {Request, Response} from 'express' 
import {CreateUserCase} from '@application'
import {UserRepository} from '@infrastructure'

export class UserController{
    private createUserCase: CreateUserCase

    constructor(){
        
    }
}