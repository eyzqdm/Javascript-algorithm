/* 元素和大于target的最短连续子序列 
滑动窗口法
每轮循环 都将当前值加到sum上 
sum>target 则记录一次最小长度 同时减去左边框 左边框+1   循环判断sum*
*/
function minSubArrayLen(arr, target) {
    // 左边框
    let i = 0;
    let sum = 0;
    let len = arr.length;
    let flag = false
    for (let j = 0; j < arr.length; j++) {
      sum = sum + arr[j];
      while (sum >= target) {
        flag = true
        len = Math.min(len, j - i + 1);
        sum = sum - arr[i];
        i++;
      }
    }
    return flag?len:0
  }
  console.log(minSubArrayLen([1,2,3,4,5],15))