function jiecheng(n) {
  if (n === 0) {
    return 1
  }
  return n * jiecheng(n - 1);
}

const res = jiecheng(5);
console.log(res);
