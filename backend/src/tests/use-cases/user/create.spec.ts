import { describe, expect, it } from "vitest";
import { UserInfraRepository } from "../../../infra/drizzle.user.repository";

describe("Must be return a user object", () => {
  const repo = new UserInfraRepository();

  const userMock = {
    name: "kalleb",
    email: "kalleb@gmail.com",
    brokerage: 44.5
  }

  it("Create new user", async () => {
    const result = await repo.save(userMock);

    expect(result).toBe({
      id: 4,
      name: "kalleb",
      email: "kalleb@gmail.com",
      brokerage: 44.5
    })
  })
})