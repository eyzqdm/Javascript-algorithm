function interval(fn,out) {
    
const obj = {
    target:null
}
const rec = ()=>{
    obj.target = setTimeout(()=>{
        fn()
        rec()
    },out)
}
rec()
return obj
}
function clear(foo) {
    clearTimeout(foo.target)
}
function foo() {
    console.log('xiaom')
}
let res =  interval(foo,500)
setTimeout(() => {
    clear(res)
}, 3500);