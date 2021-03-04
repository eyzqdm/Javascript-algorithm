const req = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = {
        req: url,
        res: `回应：${url}`,
      };
      resolve(res);
    }, 200);
  });
};
const multiRequest = (urls, maxNum) => {
  let i = 0;
  const ret = []; // 完成集合
  const executing = []; // 执行集合
  const enqueue = () => {
    if (urls.length === i) {
      // 判断是否全部执行完
      return Promise.resolve();
    }
    const p = Promise.resolve().then(() => {
        req(urls[i++])
        console.log( `${urls[i++]} 结束`)
    });
    ret.push(p);
    const e = p.then(() => executing.splice(0, 1)); // 执行完从executin中剔除一个
    executing.push(e);

    let r = Promise.resolve();
    if (executing.length >= maxNum) {
      // 判断executing中的长度是否大于等于限制数maxNum
      r = Promise.race(executing);
    }
    return r.then(() => enqueue()); // 当 r = Promise.race 时会等到其中一个执行完才执行下一步
  };

  return enqueue().then(() => Promise.all(ret)); //全部执行完按顺序返回
};
// Array.from 的第二个参数相当于map
multiRequest(
  [1,2,3,4,5,6],2
).then((res) => {
  console.log(res); // ["/api/test?0", "/api/test?1", "/api/test?2", "/api/test?3", "/api/test?4", "/api/test?5", "/api/test?6", "/api/test?7", "/api/test?8", "/api/test?9"]
});
