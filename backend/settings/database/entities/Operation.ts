import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn } from "typeorm";
import { User } from "./User";
import { Asset } from "./Assets";

@Entity()
export class Operation{
    constructor(
       id: number,
       userId: number,
       assetId: number,
       quantity: number,
       unit_price: number,
       type: string,
       brokerage: number,
       date_hour: Date
   ) {
       this.id = id;
       this.userId = userId,
       this.assetId = assetId;
       this.quantity = quantity;
       this.unit_price = unit_price;
       this.type = type;
       this.brokerage = brokerage;
       this.date_hour = date_hour;
   }
    
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user => user.operations)
    @JoinColumn({ name: "user_id" })
    userId: number;

    @ManyToOne(() => Asset)
    @JoinColumn({ name: "assets_id" })
    assetId: number

    @Column()
    quantity: number;

    @Column({ type: "decimal", precision: 15, scale: 2 })
    unit_price: number;

    @Column()
    type: string;

    @Column({ type: "decimal", precision: 5, scale: 2 })
    brokerage: number;

    @CreateDateColumn({ type: "timestamp", name: "date_hour" })
    date_hour: Date;
}