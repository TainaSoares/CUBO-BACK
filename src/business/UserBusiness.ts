import { UserData } from "../data/UserData";
import { MissingFields } from "../error/MissingFields";
import { UserInputDTO, UserInsertDTO } from "../model/User";
import  {IdGenerator}  from "../services/IdGenerator";

export class UserBusiness{

    constructor(
        private IdGenerator:IdGenerator,
        private userData:UserData,
    ){}

    async user(input: UserInputDTO){

        if(input.participation === 0){
            throw new Error("Participation can't be 0 'zero'.")
        }

        if(!input.firstName || !input.lastName || !input.participation){
            throw new MissingFields()
        }

        // const userToInsert:UserInsertDTO ={
        //     id : IdGenerator.generateId(),
        //     firstName: input.firstName,
        //     lastName: input.lastName,
        //     participation: input.participation
        // } OU

        const userToInsert:UserInsertDTO ={
            id : this.IdGenerator.generateId(),
            ...input
        }


        
        const result = await this.userData.insertUser(userToInsert)

        return result
    }


    async allUser(){
        const result = await this.userData.getAllUser()
        return result
    }
}

