/*
简单选择排序
每轮循环选出最小的 放在数组开头
下次循环从i处开始
若最小值的下表和开头处一样则就不用替换了 
 */
function selectionSort(arr) {
  // 只需进行n-1轮  因为最后一个一定是最大的 不用比了
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[min] > arr[j]) min = j;
    }
    if (min !== i) {
      let temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp;
    }
  }

  return arr;
}

console.log(selectionSort([3, 2, 4, 7, 9, 1, 6]));
