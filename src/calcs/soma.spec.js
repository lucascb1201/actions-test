import * as all from "./sum";

describe("test soma", () => {
  const sum = new all.Sum();
  const value = sum.execute(2, 3);

  test("should sum correctly", () => {
    expect(value).toBe(4);
  });
});
