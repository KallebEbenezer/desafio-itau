import { User } from "../src/database/entities/User";
import { Assets } from "../src/database/entities/Assets";
import { Quotation } from "../src/database/entities/Quotation";
import { Operation } from "../src/database/entities/Operation";
import { Position } from "../src/database/entities/Position";

export function getAllModels() {
    const models = [   
        User,
        Assets,
        Quotation,
        Operation,
        Position
    ];

    return models;
}
