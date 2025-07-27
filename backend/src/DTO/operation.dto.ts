export interface OperationInputDTO {
    userId: number,
    assetId: number, 
    quantity: number,
    unityPrice: number,
    operation_type: "buy" | "sale",
    brokerage: number
}