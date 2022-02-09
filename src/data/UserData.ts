import { User, UserInsertDTO } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserData extends BaseDatabase{

    private static TABLE_NAME = "user_cubo"

    async insertUser(user: UserInsertDTO): Promise<string>{
        try {

            const{id,firstName, lastName, participation} = user
            /*Se eu não quiser fazer a desestruturação, como o meu user está tipado, posso fazer 
            await this.getConnection().insert(user).into(UserData.TABLE_NAME)*/

            await this.getConnection().insert({
                id,
                firstName,
                lastName,
                participation
            }).into(UserData.TABLE_NAME)

            return "User created successfully!"
        } catch (error) {
            if(error instanceof Error){
                throw new Error(error.message)
            }else{
                throw new Error ("SQL error.")
            }
        }
    }


    async getAllUser(){
        try {

            const result:User[] = await this.getConnection()
                .select("*")
                .from(UserData.TABLE_NAME)
            
            const users = result.map((user)=>{
                return User.userModel(user)

            })
            return users
        } catch (error) {
            if(error instanceof Error){
                throw new Error(error.message)
            }else{
                throw new Error ("SQL error.")
            }
        }
    }

}