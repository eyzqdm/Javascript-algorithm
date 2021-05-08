function count(nums, n) {
  let obj = {};
  let res = [];
  nums.forEach((item, index) => {
    obj[item] ? obj[item]++ : (obj[item] = 1);
  });

  // 获取最多的前n个
  const list = Object.values(obj)
    .sort((a, b) => b - a)
    .splice(0, n);
  let keysList = Object.keys(obj);
  // obj中存储的是每个值出现的次数
  for (let i = 0; i < keysList.length; i++) {
    // obj[keysList[i]] 当前循环的变量的次数
    let index = list.indexOf(obj[keysList[i]]);
    if (index !== -1) {
      res[index] = keysList[i];
    }
  }
  console.log(res);
  return res;
}

count([1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4, 5, 6, 6, 6, 6, 6, 6], 3);
