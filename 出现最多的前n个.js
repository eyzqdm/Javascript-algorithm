function count(nums, n) {
  let obj = {};
  let obj2 = {};
  nums.forEach((item, index) => {
    obj[item] ? obj[item]++ : (obj[item] = 1);
  });

  Object.keys(obj).forEach((i) => {
    obj2[obj[i]] = i;
  });
  let res = Object.values(obj).sort().reverse();
  for (let i = 0; i < n; i++) {
    console.log(obj2[res[i]]);
  }
}

count([1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4, 5, 6, 6, 6, 6, 6, 6, 6], 3);
