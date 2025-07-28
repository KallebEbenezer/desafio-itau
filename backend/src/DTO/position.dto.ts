export interface PositionInputDTO {
  userId: number,
  assetId: number,
  quantity: number,
  averagePrice: number, 
  pl: number
}

export interface PositionOutPutInterface {
  id: number,
  userId: number,
  assetId: number,
  quantity: number,
  averagePrice: number,
  pl: number
}