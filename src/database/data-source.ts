import { DataSource } from "typeorm";
import { getAllModels } from "../../utils/export_models";

export const MainDataSource = new DataSource({
    type: "mysql",
    port: 3306,
    host: "localhost",
    username: "root",
    password: "skin1980",
    database: "investimentscontrol",
    entities: [
        getAllModels
    ],
    migrations: [
        "src/database/migrations/*.ts"
    ]
});