/*
冒泡
交换 注意第二轮循环长度要递减 
 */
function bubbling(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

console.log(bubbling([3, 2, 4, 7, 9, 1, 6]));
