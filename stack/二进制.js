function trans(num) {
  if (num === 0 || num === 1) return num;

  let res = [];
  let str = "";
  while (num) {
    res.push(num % 2); // 取余
    num = parseInt(num / 2); // 取整
  }

  while (res.length) {
    str += res.pop();
  }

  return str;
}

const res = trans(0);
console.log(res);
