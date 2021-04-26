/*
快排
每次选取队头元素 大于它的放右边 小于的放左边
左右再递归处理 
 */
function quick(arr) {
  if (arr.length === 1 || arr.length === 0) return arr;
  const left = [];
  const right = [];
  const base = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < base) left.push(arr[i]);
    else right.push(arr[i]);
  }
  return [...quick(left), base, ...quick(right)];
}


/* function quick(arr) {
  if (arr.length === 1 || arr.length === 0) return arr;
  const base = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < base) left.push(arr[i]);
    else right.push(arr[i]);
  }
  return [...quick(left), base, ...quick(right)];
} */

console.log(quick([2, 1, 6, 4, 7, 3, 8, 9]));
