function del(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) arr.splice(i, 1);
    while (arr[i] === num) {
      arr.splice(i, 1);
    }
  }

  return arr;
}

const arr1 = [1, 2, 3, 4, 5, 5, 6, 7, 5, 3, 2];
const num1 = 3;
console.log(del(arr1, num1));
