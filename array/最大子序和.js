/*
 * @Author: your name
 * @Date: 2021-02-22 17:29:19
 * @LastEditTime: 2021-02-22 17:38:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JavaScript-algorithm\array\最大子序和.js
 */
function checkBig (a,b){
   
    return a > b? a:b
}

function max(arr) {

  if(arr.length === 1) return arr[0]
  let max = arr[0]

  for (let i = 1; i < arr.length - 1; i++) {
    
    max=checkBig(max,max + arr[i])
  }

  return max
}

console.log(max([2]))
