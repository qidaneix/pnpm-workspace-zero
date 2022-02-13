import { cloneDeep } from "lodash-es";
import dayjs from "dayjs";

const foo = { bar: "hello" };
console.log(cloneDeep(foo));

const now = dayjs();
console.log(now.format("YYYY-MM-DD HH:mm:ss"));

export function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
}
