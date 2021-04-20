function count(nums, n) {
  let obj = {};
  let res = [];
  nums.forEach((item, index) => {
    obj[item] ? obj[item]++ : (obj[item] = 1);
  });

  const list = Object.values(obj)
    .sort((a, b) => b - a)
    .splice(0, n);
  let keysList = Object.keys(obj);
  for (let i = 0; i < keysList.length; i++) {
    let index = list.indexOf(obj[keysList[i]]);
    if (index !== -1) {
      res[index] = keysList[i];
    }
  }
  console.log(res);
  return res;
}

count([1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4, 5, 6, 6, 6, 6, 6, 6], 3);
