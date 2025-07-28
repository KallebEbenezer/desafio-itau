import { it, expect, describe, expectTypeOf } from "vitest"
import { operationUseCases } from "../../../infra/adapters.infra/operation.adapters"

describe("Create a new operation register in database", () => {
  it("Create new operation", async () => {
    const newOp = {
      userId: 1,
      assetId: 1,
      quantity: 20,
      unityPrice: 30.4,
      operation_type: "buy",
      brokerage: 2.75
    }

    const result = await operationUseCases.create.execute(newOp);

    expect(result).toBe(newOp);
  })
})