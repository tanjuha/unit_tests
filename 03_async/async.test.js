const Ajax = require("./async");

describe("Ajax: echo function", () => {
  test("should return value async", async () => {
    const result = await Ajax.echo("some data");

    expect(result).toBe("some data");
  });

  test("should catch error with promise", () => {
    return Ajax.echo().catch((error) => {
      expect(error).toBeInstanceOf(Error);
    });
  });

  test("should catch error with async await", async () => {
    try {
      await Ajax.echo();
    } catch (e) {
      expect(e.message).toBe("error");
    }
  });
});
