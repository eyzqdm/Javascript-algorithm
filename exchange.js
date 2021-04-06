/*
交换两数的值 不使用临时变量 
 */

function exchange() {
  b = a + b; // 首先得到两数之和
  a = b - a; // 减去a的值 得到b的值  赋给a
  b = b - a; // a此时是b的值  用两数和减去他 就是a的值 赋给b
}
let a = 3;
let b = 5;
exchange(a, b);
console.log(a, b);
