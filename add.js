function add() {
  // 第一次执行时，定义一个数组专门用来存储所有的参数
  var _args = [].slice.call(arguments);
  // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
  var adder = function () {
      var _adder = function() {
          // [].push.apply(_args, [].slice.call(arguments));
          _args.push(...arguments);
          return _adder;
      };
      // 利用隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
      _adder.toString = function () {
          return _args.reduce(function (a, b) {
              return a + b;
          });
      }
      return _adder;
  }
  return adder(..._args);
}
// add() = adder() = _adder()
// 举例  add(1)(2)
// 1 adder(1)(2)
// 2 _adder(2)  带括号 直接执行  _args[1]
// 3 _adder 不带括号 执行隐式转换 求和 _args[1,2]
var a = add(1)(2)(3)(4);   // f 10  _adder()
var b = add(1, 2, 3, 4);   // f 10  
var c = add(1, 2)(3, 4);   // f 10
var d = add(1, 2, 3)(4);   // f 10
// 可以利用隐式转换的特性参与计算
console.log(a + 10); // 20
console.log(b + 20); // 30
console.log(c + 30); // 40
console.log(d + 40); // 50

