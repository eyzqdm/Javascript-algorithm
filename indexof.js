/*
如果数组中存在 item，则返回元素在数组中的位置，否则返回 -1 
 */

function indexof(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (num === arr[i]) return i;
  }

  return -1;
}
let arr = [1,2,3,5,6,77,9]

console.log(indexof(arr,10))