import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./User";
import { Asset } from "./Assets";

@Entity()
export class Position{
    constructor(
        id: number,
        user: User,
        assets: Asset,
        quantity: number,
        average_price: number,
        pl: number
    ) {
        this.id = id;
        this.user = user;
        this.assets = assets;
        this.quantity = quantity;
        this.average_price = average_price;
        this.pl = pl;
    }    

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User)
    @JoinColumn({ name: "user_id" })
    user: User;

    @ManyToOne(() => Asset)
    @JoinColumn({ name: "assets_id" })
    assets: Asset;

    @Column()
    quantity: number;

    @Column({ type: "decimal", precision: 15, scale: 2 })
    average_price: number;

    @Column({ type: "decimal", precision: 15, scale: 2 })
    pl: number;
}