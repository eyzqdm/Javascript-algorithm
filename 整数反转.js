var reverse = function (x) {
  if(x === 0) return 0
  let num = x.toString().split("");
  let res = 0;
  if (num[0] === "-") {
    let x = num.splice(1).reverse();
    while (x[0] === "0") {
      x.splice(0, 1);
    }
    res = "-" + x.join("");
  } else {
    let x = num.reverse();
    while (x[0] === "0") {
      x.splice(0, 1);
    }
    res = x.join("");
  }

  if(res <= Math.pow(-2,31) || res >= Math.pow(2,31)) return 0
  return res;
};

console.log(reverse(123));
