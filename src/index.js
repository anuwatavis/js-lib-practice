import get from "lodash/get";

export const sayHello = () => "Hello Anuwat ✋";

export const asyncSayHello = async () => {
  return Promise.resolve("test");
};

export const getA = (a) => get(a, "a");
