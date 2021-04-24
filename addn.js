/* 
不用判断语句 循环 实现累加
递归+三元
 */
function add(n) {
  return n > 0 ? n + add(n - 1) : n;
}
console.log(add(5));
