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
