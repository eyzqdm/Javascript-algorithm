/*
 * @Author: your name
 * @Date: 2021-02-03 14:55:55
 * @LastEditTime: 2021-02-19 10:22:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JavaScript-algorithm\add.js
 */
function add() {
  // 第一次执行时，定义一个数组专门用来存储所有的参数
  var _args = [].slice.call(arguments);

  // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
  var adder = function () {
    var _adder = function () {
      // [].push.apply(_args, [].slice.call(arguments));
      _args.push(...arguments);
      return _adder;
    };

    // 利用隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
    _adder.toString = function () {
      return _args.reduce(function (a, b) {
        return a + b;
      });
    };

    return _adder;
  };
  // return adder.apply(null, _args);
  return adder(..._args);
}

/* function add() {
    // 第一次执行时，定义一个数组专门用来存储所有的参数
    var _args = [].slice.call(arguments);
  
    console.log(_args)
    // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
      var _adder = function () {
        // [].push.apply(_args, [].slice.call(arguments));
        if(Object.keys(arguments).length)
        {
            _args.push(...arguments);
            console.log(_args)
            return _adder;
        }
        else   console.log(_args)
      };
  
      // 利用隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
      sum = function () {
        return _args.reduce(function (a, b) {
          return a + b;
        });
      };
  
  
    // return adder.apply(null, _args);
    return _adder;
  }
   */
console.log(add(1)(2)(3,4)())