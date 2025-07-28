import { describe, expect, it } from "vitest";
import SumTotalOperations from "../../../infra/drizzle-querys/quantityOperations";

describe("Must be return a value of sum", () => {
  it("Fetch sum of operations", async () => {
    const result = await SumTotalOperations({userId: 4, assetId: 2 })

    expect(result).toBe(40)
  })
})  