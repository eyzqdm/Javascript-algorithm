/*
以空间换取时间 
 */

function sort(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res[arr[i]] ? res[arr[i]].push(arr[i]) : (res[arr[i]] = [arr[i]]);
  }
  return res
    .reduce((pre, cur) => {
      if (cur) {
        pre.push(cur);
      }
      return pre;
    }, [])
    .flat();
}

console.log(sort([4, 5, 2, 2, 1, 7, 2, 2, 9, 11, 44]));
