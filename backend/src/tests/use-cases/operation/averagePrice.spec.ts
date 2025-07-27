import { describe, expect, it } from "vitest";
import AveragePrice, { operationsAndPrice } from "../../../infra/drizzle-querys/averagePrice";

describe("Must be return a value of sum", () => {
  it("Fetch sum of operations", async () => {
    const result = await AveragePrice({userId: 1, assetId: 2, type: "buy"})

    expect(result).toBe(170)
  })
})