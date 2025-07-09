import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Asset } from "./Assets";

@Entity()
export class Quotation {
    constructor(
        id: number,
        assets: Asset,
        price: number,
        date_hour: Date
    ) {
        this.id = id;
        this.assets = assets;
        this.price = price;
        this.date_hour = date_hour;
    }
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Asset)
    @JoinColumn({ name: "assets_id" })
    assets: Asset;  

    @Column({ type: "decimal", precision: 15, scale: 2 })
    price: number;

    @Column({ type: "timestamp" })
    date_hour: Date;
}