import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Assets {
    constructor(id: number, code: string, name: string) {
        this.id = id;
        this.code = code;
        this.name = name;
    }
    
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    code: string;
    @Column()
    name: string;

}