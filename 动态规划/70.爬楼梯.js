/*
分析
到达第n阶 只有两种方式
要么从第n-1阶 向上爬一阶
要么从第n-2阶 向上爬两阶
因此 第n阶的方式等于上述两方式之和 
 */
var climbStairs = function (n) {
  if (n === 1) return 1;
  let res = [1, 1];
  for (let i = 2; i <= n; i++) {
    res[i] = res[i - 1] + res[i - 2];
  }

  return res[n];
};

console.log(climbStairs(45))
