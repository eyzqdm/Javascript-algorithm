/*
计算给定数组 arr 中所有元素的总和
*/

function sum(arr) {
  return arr.reduce((pre, cur) => {
    return pre + cur;
  });
}

console.log(sum([1,2,3]))