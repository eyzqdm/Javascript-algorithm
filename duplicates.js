function duplicates(arr) {
  let res = new Set();
  arr.reduce((pre, cur) => {
    pre.indexOf(cur) === -1 ? pre.push(cur) : res.add(cur);
    return pre;
  }, []);
  // 利用展开运算符将set转为数组
  return [...res];
}

let arr = [1, 2, 4, 4, 3, 3, 1, 5, 3];
console.log(duplicates(arr));
