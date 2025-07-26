export class User {
  constructor(
    public name: string,
    public email: string,
    public readonly brokerage: number
  ) {
    if(!name || !email) throw new Error("Name and email is required");
  }

}