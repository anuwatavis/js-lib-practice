import { sayHello, asyncSayHello, getA } from "./index";
it("say Hello Anuwat with hand emoji", () => {
  expect(sayHello()).toBe("Hello Anuwat ✋");
});

it("async say hello", async () => {
  await expect(asyncSayHello()).resolves.toEqual("test");
});

it("lodash get", () => {
  expect(getA({ a: "test" })).toBe("test");
});
