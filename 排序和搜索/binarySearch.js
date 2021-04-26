/*
二分查找 
 */
function search(arr, item) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    console.log(mid)
    const e = arr[mid];
    if (item > e) {
      low = mid + 1;
    } else if (item < e) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1
}

console.log(search([1,2,3,4,5],1))

