import { expect, test, describe } from 'vitest'

import { Sum } from "./sum";

describe("test soma", () => {
  const sum = new Sum();
  const value = sum.execute(2, 3);

  test("should sum correctly", () => {
    expect(value).toBe(4);
  });
});
