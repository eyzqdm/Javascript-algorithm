/*
 * @Author: your name
 * @Date: 2021-02-21 14:57:36
 * @LastEditTime: 2021-02-21 15:19:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JavaScript-algorithm\stack\二进制.js
 */
function trans(num) {
  if (num === 0 || num === 1) return num;

  let res = [];
  let str = "";
  while (num) {
    res.push(num % 2); // 取余
    num = parseInt(num / 2); // 取整
  }

  while (res.length) {
    str += res.pop();
  }

  return str;
}

const res = trans(0);
console.log(res);
