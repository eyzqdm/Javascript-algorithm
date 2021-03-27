// 模拟ajax请求
function majax(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = {
        req: url,
        res: `回应：${url}`,
      };
      resolve(res);
    }, 200);
  });
}

// 批量请求切控制并发数
function multiRequest(urls, maxNum) {
  return new Promise((resolve, reject) => {
    let _urls = [...urls];
    let _ress = {}; //存储请求结果
    let stackNum = 0; //使用队列控制并发数
    let _rsl = [];
    // 添加一个新的请求
    let addXhr = function () {
      // 队列已满或没有待请求
      if (stackNum >= maxNum || _urls.length == 0) return;
      const __path = _urls.shift();
      stackNum++;
      console.log(`${__path} begin!`);
      majax(__path).then((res) => {
        _ress[__path] = res;
        console.log(`${__path} over!`);
        stackNum--;
        if (stackNum == 0 && _urls.length == 0) {
          // 所有请求全部返回完毕
          for (let i = 0; i < urls.length; i++) {
            _rsl.push(_ress[urls[i]]);
          }
          resolve(_rsl);
        } else {
          addXhr();
        }
      });
    };

    while (stackNum < maxNum) {
      addXhr();
    }
  });
}

function request(urls, maxNum) {
  let stackNum = 0; //使用队列控制并发数
  let allRes = [];
  return new Promise((resolve, reject) => {
    const addReq = async function () {
      if (stackNum === maxNum || urls.length === 0) return;
      stackNum++;
      execute();
    };
    const execute = function () {
      const url = urls.shift();

      console.log(`${url} start!`);
      majax(url).then((res) => {
        allRes.unshift(res);
        console.log(`${url} over!`);
        stackNum--;
        if (stackNum == 0 && urls.length === 0) {
          resolve(allRes);
        } else {
          addReq();
        }
      });
    };

    while (stackNum < maxNum) {
      addReq();
    }
    console.log("达到最大并发数");
  });
}
request([1, 2, 3, 4, 5, 6], 3).then((res) => {
  console.log(res);
});

/* 我们把异步请求放在一个队列里，比如并发数是3，就先同时发起3个请求，然后有请求结束了，
再发起下一个请求即可， 思路清楚，代码也就呼之欲出了 */

/*  首先执行while 同步代码 一直添加异步请求。达到并发限制时
跳出while,此时同步任务执行完毕，执行异步任务。每执行完一个请求，
就将当前队列长度减一，并新添加一个异步请求。当url数组和队列均为空
resolve 返回结果
*/
