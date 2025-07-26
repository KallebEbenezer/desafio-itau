export interface OperationInputDTO {
    userId: number,
    assetId: number, 
    quantity: number,
    unityPrice: number,
    operationType: "buy" | "sale",
    brokerage: number
}