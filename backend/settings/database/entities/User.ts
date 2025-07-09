import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { Operation } from "./Operation";

@Entity()
export class User {
    constructor(id: number, username: string, email: string, brokerage: number, operations: Operation[]) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.brokerage = brokerage;
        this.operations = operations;
    }

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    username: string;
    @Column()
    email: string;
    @Column()
    brokerage: number;
    @OneToMany(() => Operation, operation => operation.user)
    operations: Operation[];
}