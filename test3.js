/*
实现函数 makeClosures，调用之后满足如下条件：
1、返回一个函数数组 result，长度与 arr 相同
2、运行 result 中第 i 个函数，即 result[i]()，结果与 fn(arr[i]) 

 */

function makeClosures(arr, fn) {
  let fnArr = [];

  for (let i = 0; i < arr.length; i++) {
    (function () {
      fnArr.push(function () {
          // 又忘返回了
        return fn(arr[i]);
      });
    })();
  }

  return fnArr;
}

/* let fn = (x) => {
  console.log(x * x);
};

let arr = [1, 2, 3];

let FnArr = makeClosures(arr, fn); */
// FnArr[1]();
// fn(arr[1]);
function test() {
  var arr = [Math.random(), Math.random(), Math.random(), Math.random()];
  var square = function (x) {
    return x * x;
  };
  var funcs = makeClosures(arr, square);
  var result = true;
  let s = funcs[1]()
  console.log(s)
  /* for (var i = 0; i < arr.length; i++) {
     
    result = result && funcs[i]() === square(arr[i]);
  }
  return result; */
}

test()