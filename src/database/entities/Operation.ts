import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./User";
import { Assets } from "./Assets";

@Entity()
export class Operation{
    constructor(
       id: number,
       user: User,
       assets: Assets,
       quantity: number,
       unit_price: number,
       type: string,
       brokerage: number,
       date_hour: Date
   ) {
       this.id = id;
       this.user = user;
       this.assets = assets;
       this.quantity = quantity;
       this.unit_price = unit_price;
       this.type = type;
       this.brokerage = brokerage;
       this.date_hour = date_hour;
   }
    
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User)
    @JoinColumn({ name: "user_id" })
    user: User;

    @ManyToOne(() => Assets)
    @JoinColumn({ name: "assets_id" })
    assets: Assets;

    @Column()
    quantity: number;

    @Column({ type: "decimal", precision: 15, scale: 2 })
    unit_price: number;

    @Column()
    type: string;

    @Column({ type: "decimal", precision: 5, scale: 2 })
    brokerage: number;

    @Column({ type: "timestamp" })
    date_hour: Date;

}