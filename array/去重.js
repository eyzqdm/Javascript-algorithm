function test(arr) {
  arr.sort().forEach((item, index, arr) => {
    while (item === arr[index + 1]) {
      arr.splice(index, 1);
    }
  });

  return arr;
}

console.log(test([1,1,2]))
