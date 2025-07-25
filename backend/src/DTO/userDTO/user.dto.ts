export interface UserInputDTO {
  name: string;
  email: string;
  brokerage: number
}

export interface UserOutputDTO {
  id: number;
  name: string;
  email: string;
  brokerage: number | null 
}