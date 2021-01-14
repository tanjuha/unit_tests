const Lodash = require("./sync");

let _ = new Lodash();
let arr;

describe("Lodash: compact", () => {
  beforeEach(() => {
    arr = [1, 2, false, "tom", null, undefined];
  });
  test("should be defined", () => {
    expect(_.compact).toBeDefined();
    expect(_.compact).not.toBeUndefined();
  });

  test("return array", () => {
    const newArr = [1, 2, "tom"];
    expect(_.compact(arr)).toEqual(newArr);
  });

  test("return not falsy values", () => {
    expect(_.compact(arr)).not.toContain(false);
    expect(_.compact(arr)).not.toContain(null);
  });
});

describe("Lodash: groupBy", () => {
  test("defined ", () => {
    expect(_.groupBy).toBeDefined();
    expect(_.groupBy).not.toBeUndefined();
  });

  test("group array items by Math.floor ", () => {
    const arr = [2.2, 1.3, 3.5];
    const res = {
      2: [2.2],
      1: [1.3],
      3: [3.5],
    };
    expect(_.groupBy(arr, Math.floor())).toEqual(res);
  });
  test("group array items by lenght ", () => {
    const arr = ["one", "two", "three"];
    const res = {
      3: ["one", "two"],
      5: ["three"],
    };
    expect(_.groupBy(arr, "lenght")).toEqual(res);
  });

  test("NOT return array ", () => {
    expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array);
  });
});
