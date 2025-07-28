import { positionUseCases } from "../../../infra/adapters.infra/position.adapters";
import { it, describe, expect } from "vitest";

describe("Create a new position object in database", () => {
  it("Create a new position", async() => {
    const result = await positionUseCases.createPosition.execute({ userId: 1, assetId: 1 });
  
    expect(result).toBe("created")
  })
})