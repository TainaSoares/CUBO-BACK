import { BaseDatabase } from "./BaseDatabase";

class Migrations extends BaseDatabase{
    async createTable(){
        await this.getConnection().raw(`
            CREATE TABLE IF NOT EXISTS user_cubo(
                id VARCHAR(255) PRIMARY KEY,
                firstName VARCHAR(255) NOT NULL,
                lastName VARCHAR(255) NOT NULL,
                participation FLOAT NOT NULL
            );
        `)
        console.log("Tabela user_cubo foi criada com sucesso!")
    }
}

const createTableMigrations = new Migrations();

createTableMigrations.createTable();