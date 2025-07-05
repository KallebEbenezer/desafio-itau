import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    constructor(id: string, username: string, email: string, brokerage: number) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.brokerage = brokerage;
    }

    @PrimaryGeneratedColumn()
    id: string;
    @Column()
    username: string;
    @Column()
    email: string;
    @Column()
    brokerage: number;
}