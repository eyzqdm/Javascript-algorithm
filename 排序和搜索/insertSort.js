/*
直接插入排序
从第二个开始一次与前面的比较 找到合适的插入位置 
 */

function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    let temp = arr[i];
    while (j >= 0) {
      // 依次与前面元素比较 若大于当前元素 则后移一位 最后的位置正好就是该元素应该插入的位置 
      if (arr[j - 1] > temp) {
        arr[j] = arr[j - 1];
      } else {
        break;
      }
      j -= 1;
    }
    arr[j] = temp
  }
  return arr
}

console.log(insertSort([4,3,7,5,2,8,9,2,1]))