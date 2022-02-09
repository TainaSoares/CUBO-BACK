import { User, UserInsertDTO } from "../../src/model/User"
import { userMock_1, userMock_2 } from "./UserMock"


export class UserDataMock {


    async insertUser(user: UserInsertDTO): Promise<string>{
        return "User created successfully!"
    }


    async getAllUser():Promise<User[]>{
        return[userMock_1, userMock_2]
    }

}