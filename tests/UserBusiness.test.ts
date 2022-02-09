import exp from "constants";
import { UserBusiness } from "../src/business/UserBusiness"
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"
import { UserDataMock } from "./mocks/UserDataMock"


const userBusinessMock = new UserBusiness(
    new IdGeneratorMock(),
    new UserDataMock() as any
);

describe("Inserindo informações do usuário", ()=>{

    test("firstName vazio",async()=>{
        expect.assertions(1)
        try {
            await userBusinessMock.user({
                firstName:"",
                lastName: "da Silva",
                participation:5
            })
        } catch (error:any) {
            expect(error.message).toEqual("Missing fields to complete!")
        }
    })


    test("lastName vazio",async()=>{
        expect.assertions(1)
        try {
            await userBusinessMock.user({
                firstName:"João",
                lastName: "",
                participation:5
            })
        } catch (error:any) {
            expect(error.message).toEqual("Missing fields to complete!")
        }
    })

    test("participation zero",async()=>{
        expect.assertions(1)
        try {
            await userBusinessMock.user({
                firstName:"João",
                lastName: "da Silva",
                participation:0
            })
        } catch (error:any) {
            expect(error.message).toEqual("Participation can't be 0 'zero'.")
        }
    })

    test("Caso de sucesso contendo todos os dados",async()=>{
        expect.assertions(1)
        try {
            const result = await userBusinessMock.user({
                firstName:"João",
                lastName: "da Silva",
                participation:20
            })
            expect(result).toEqual("User created successfully!")
        } catch (error:any) {
            console.log(error)
        }
    })
})

describe("Buscar por todos os usuários", ()=>{
    test("Buscar pelos usuários", async()=>{
        expect.assertions(1)
        try {
            const result = await userBusinessMock.allUser()

            expect(result).toEqual([
                {
                id:"id_mock_1",
                firstName:"João",
                lastName:"Silva",
                partiipation:10},
                {
                id:"id_mock_2",
                firstName:"Maria",
                lastName:"Silva",
                partiipation:20}
            ])
        } catch (error) {
            console.log(error)
        }
    })
})