import { Request, Response } from "express";
import {UserBusiness} from "../business/UserBusiness";
import { UserData } from "../data/UserData";
import { UserInputDTO } from "../model/User";
import {IdGenerator} from "../services/IdGenerator";

export class UserController{

    async createUser(req:Request, res:Response){
        try {
            const{firstName, lastName, participation} = req.body
            const userInput: UserInputDTO = {
                firstName,
                lastName,
                participation
            }

            //instanciando o UserBusiness e enviando para o business
            const userBusiness = new UserBusiness(new IdGenerator(), new UserData())
            const message = await userBusiness.user(userInput)

            res.status(200).send({message:message})
        } catch (error) {
            if(error instanceof Error){
                res.status(400).json({message: error.message})
            }else{
                res.status(400).json({message: "Unexpected error!"})
            }
            
        }
    }


    async getAllUsers(req:Request, res:Response){
        try {
            
            //instanciando o UserBusiness e enviando para o business
            const userBusiness = new UserBusiness(new IdGenerator(), new UserData())
            const allUsers = await userBusiness.allUser()

            res.status(200).send(allUsers)
        } catch (error) {
            if(error instanceof Error){
                res.status(400).json({message: error.message})
            }else{
                res.status(400).json({message: "Unexpected error!"})
            }
            
        }
    }
}