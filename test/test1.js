const data = [{
    key:'name',
    value:'豆皮'
}, {
    key:'age',
    value:1
}, {
    key:'from',
    value:'数据平台'
}]

/*
展开运算符
结构赋值
表达式作为对象属性名
 */
const fn = data => {
    let processData = {};
    Object.values(data).forEach(({key,value}) => {

        processData = {...processData,[key]:value}
    } )

    return processData
}

console.log(fn(data))