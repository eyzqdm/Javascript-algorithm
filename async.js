/**
 * @description 异步并行串行
 */

let a1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("a1");
      resolve();
    }, 500);
  });
};
let a2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("a2");
      resolve();
    }, 500);
  });
};
let a3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("a3");
      resolve();
    }, 500);
  });
};
let callback = () => {
  console.log("cb!");
};

/**
 * @description 串行 第二个异步要等第一个结束后再执行
 */

async function serial() {
  const [cb, ...others] = [...arguments];
  // let count = 0;
  for (let i = 0; i < others.length; i++) {
    await others[i]();
  }
  cb();
  console.log("end");
}

// 用for of 实现串行
async function serial_2() {
  const [cb, ...others] = [...arguments];
  for (let i of others) {
    await i();
  }
  cb();
  console.log("end");
}

// serial_2(callback, a1, a2, a3);
/**
 * @description 异步并行 没有先后顺序 promise.all的实现思路
 */
function para() {
  const [cb, ...others] = [...arguments];
  let count = 0;
  for (let i = 0; i < others.length; i++) {
    others[i]().then(() => {
      count++;
      if (count === others.length) {
        cb();
      }
    });
  }
  console.log("end");
}

function para2() {
  const [cb, ...others] = [...arguments];
  Promise.all(others).then(cb)
}

serial(callback, a1, a2, a3);
