export class Asset {
  constructor(
    public name: string,
    public code: string,
  ) {
    if(!name || !code) throw new Error("Name and code is required");
  }

}