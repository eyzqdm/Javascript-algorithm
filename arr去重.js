const arr = [1,2,2,3,4,4,4,5]
// reduce

let newArr = arr.reduce((pre,cur)=>{
    pre.indexOf(cur) === -1&&pre.push(cur)
    return pre
  },[])//pre初始值为[]
//console.log(newArr); //[ 1, 2, 3, 4, 5 ]


// 集合 
let _set = {};
let _newarr = [];

// 逻辑中断
arr.forEach( v => _set[ v ] || ( _set[ v ] = true, _newarr.push( v ) ) ) // 减少赋值行为

//  不在循环中赋值也可以循环后用Object.kyes( _set )  获得去重后的数组
