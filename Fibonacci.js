/* 从第三项开始 每一项都是前两项之和 */

// 循环
/* function Fibonacci(n){

    let res1 = 1
    let res2 = 1
    let sum = res1
    for (let j = 0;j<n;j++)
    {
        console.log(sum)
        sum = res1 + res2
        res1 = res2
        res2 = sum
    }
}

console.log(Fibonacci(10)) */

// 基础递归 

/* function Fibonacci(n){

  if(n<=2)
  {
      return 1
  }
  else
  {
      // 先递归再计算
      const res = Fibonacci(n-1) + Fibonacci(n-2)
      console.log(res)
      return res
  }

}

Fibonacci(5) //  2 3 2 5 */


// 尾递归
/* 
function Fibonacci(n, res1=1,res2=1){
    if(n===2)
    {
        // console.log(res2)
        return res2
    }
    else
    {
        console.log(res1 + res2)
        先计算再递归
        return Fibonacci(n-1, res2, res1 + res2)
    } 
   
  }
  Fibonacci(5) */


  // 闭包