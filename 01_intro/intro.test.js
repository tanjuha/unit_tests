const { sum, nativeNull } = require("./intro");

describe("Sum function", () => {
  test("should return sum of two numbers", () => {
    expect(sum(3, 4)).toBe(7);
    expect(sum(3, 4)).toEqual(7);
  });
  test("float two values", () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
  });
});

describe("Null function", () => {
  test("shold return null", () => {
    expect(nativeNull()).toBe(null);
    expect(nativeNull()).toBeNull();
    expect(nativeNull()).toBeFalsy();
    expect(nativeNull()).not.toBeTruthy();
  });
});
