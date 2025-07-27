export class Operation {
  constructor(
    public userId: number,
    public assetId: number, 
    public quantity: number,
    public unityPrice: number,
    public operation_type: "buy" | "sale",
    public brokerage: number
  ) {}
}