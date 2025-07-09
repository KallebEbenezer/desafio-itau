import { DataSource } from "typeorm";
import { User } from "./entities/User";
import { Operation } from "./entities/Operation";
import { Asset } from "./entities/Assets";
import { Quotation } from "./entities/Quotation";
import { Position } from "./entities/Position";

export const MainDataSource = new DataSource({
    type: "mysql",
    port: 3306,
    host: "localhost",
    username: "root",
    password: "skin1980",
    database: "investimentscontrol",
    entities: [
        User,
        Operation,
        Asset,
        Quotation,
        Position
    ],
    migrations: [
        "src/database/migrations/*.ts"
    ]
});