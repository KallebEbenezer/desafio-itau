export interface PositionInputDTO {
  userId: number,
  assetId: number,
  quantity: number,
  averagePrice: number, 
  pl: number
}

export interface PositionOutPutDTO {
  id: number,
  userId: number,
  assetId: number,
  quantity: number,
  averagePrice: number,
  pl: number
}