/*
strs = ["flower","flow","flight"]
  */

var longestCommonPrefix = function (strs) {
    if(strs.length===0) return ""
    let res = []
    let len = strs[0].length
    for (let index = 0; index < strs.length; index++) {
        len = Math.min(len,strs[index].length)
    }
    for (let index = 0; index < len; index++) {
        for (let j = 0; j < strs.length-1; j++) {
            
            if(strs[j][index] !== strs[j+1][index]) return res.join('')
        }
        res.push(strs[0][index])
        
    }
    return res.join('')
};
console.log(longestCommonPrefix(['a']));
