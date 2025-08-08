// utils.test.ts - src/lib - Tests for utility functions.
import { describe, expect, it } from "vitest";
import { isValidEmail } from "./utils";

describe("isValidEmail", () => {
  it("validates correct emails", () => {
    expect(isValidEmail("test@example.com")).toBe(true);
  });
  it("rejects invalid emails", () => {
    expect(isValidEmail("invalid@")).toBe(false);
  });
});
