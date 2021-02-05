/*
 * @Author: your name
 * @Date: 2021-02-05 14:51:49
 * @LastEditTime: 2021-02-05 15:26:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JavaScript-algorithm\最长递增子序列.js
 */
function lang(arr) {
  const length = arr.length;

  let res = [arr[0]];

  for (let i = 0; i < length; i++) {
    if (arr[i] > res[res.length - 1]) {
      res.push(arr[i]);
    } else {
      let left = 0;
      let right = res.length - 1;
      while (left<right) {
        let mid = (left + right) >> 1;
        if (res[mid] < arr[i]) {
          left = mid + 1;
        } else {
          right = mid;
        }
      }
      res[left] = arr[i];
    }
  }

  /* 只是输出长度 并不一定是原数组的最长递增序列 只是长度与其相同 */
  /* 遇到比之前长度才会影响长度 否则只是替换元素 不会影响长度 */
  console.log(res);
}

lang([3, 5, 6, 2, 5, 4, 19,13,5, 6, 7, 12]);
