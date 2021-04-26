/*
两个核心点
1 递归拆分数组
2 合并有序数组 
 */
function merge(arr) {
  let res = [];
  if (arr.length === 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid, arr.length);
  // 递归合并 得到有序数组
  const orderLeft = merge(left);
  const orderRight = merge(right);
  // 合并两个有序数组
  while (orderLeft.length && orderRight.length) {
    if (orderLeft[0] < orderRight[0]) {
      res.push(orderLeft.shift());
    } else {
      res.push(orderRight.shift());
    }
  }
  // concat 不会改变现有数组
  if (orderLeft.length) res = [...res, ...orderLeft];
  if (orderRight.length) res = [...res, ...orderRight];
  console.log(res);
  return res;
}
merge([8, 1, 4, 2, 6, 7, 3]);
