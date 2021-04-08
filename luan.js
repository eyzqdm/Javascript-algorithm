/**
 * @description 数组乱序输出 每次循环 创建一个随机索引 用该索引位置的值与当前值交换
 */
function chaos(arr) {
  for (let i = 0; i < arr.length; i++) {
    const randomIndex = Math.round(Math.random() * (arr.length - 1 - i)) + i;
    let temp = arr[i];
    arr[i] = arr[randomIndex];
    arr[randomIndex] = temp;
  }
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8]
chaos(arr);
console.log(arr)
