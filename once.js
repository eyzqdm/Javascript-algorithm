/*
 * @Author: your name
 * @Date: 2020-12-22 11:13:25
 * @LastEditTime: 2021-03-01 19:53:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JavaScript-algorithm\once.js
 */
function once (fn) {
    let called = false // 是否调用过
    return function () {
      if (!called) {
        called = true
        fn.apply(this, arguments)
      }
      else console.log('已经调用过了')
    }
  }
function foo (){
    console.log('bar')
}

const onceFoo = once(foo)

onceFoo()
onceFoo()
