import { randomUUID } from "crypto";

export function idGenerate() {
  return Number(randomUUID());
}