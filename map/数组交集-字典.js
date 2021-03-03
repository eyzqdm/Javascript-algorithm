var intersection = function (nums1, nums2) {

    const obj = new Map()
    const res = []
    nums1.forEach((item) => {
       obj.set(item,true) // 值作为键，布尔值作为键值！
    })
    // sd
    nums2.forEach((item)=> {
        if(obj.has(item)) {
            res.push(item)
            obj.delete(item)
        }
    })

    return res
};


console.log(intersection([1,2,3],[2,3,4]))