import { describe, expect, it } from "vitest";
import { operationUseCases } from "../../../infra/adapters.infra/operation.adapters";

describe("Must be return a value of sum", () => {
  it("Fetch sum of operations", async () => {
    const result = await operationUseCases.sumTotalOperations.execute({userId: 1, assetId: 1 })

    expect(result).toBe(5)
  })
})  