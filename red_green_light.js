/**
 * @description 红绿灯问题 红1 绿2 黄3 交替执行
 */

const red = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("red");
      resolve();
    }, 1000);
  });
};
const green = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("green");
      resolve();
    }, 2000);
  });
};
const yellow = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("yellow");
      resolve();
    }, 3000);
  });
};

const cicle = async () => {
  await red();
  await green();
  await yellow();
  cicle();
};
cicle();
