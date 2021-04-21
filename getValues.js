const foo = {
  a: {
    b: {
      c: 32,
      d: "xioam",
    },
  },
};
const path = "a.b.d";

const getValue = (obj, path) => {
  return path.split(".").reduce((pre, cur) => {
    return pre[cur];
  }, obj);
};

console.log(getValue(foo, path));
