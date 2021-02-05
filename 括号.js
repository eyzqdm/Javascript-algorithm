
var isValid = function(s) {
    let stack = []
    let obj = {
        "(":")",
        "[":"]",
        "{":"}"
    }
    for(let i = 0;i<s.length;i++)
    {
        const ele = s[i]
        if(obj[ele]){
            stack.push(ele)
        } 
        else {
            if (obj[stack.pop()] !== ele)
            return false
        }
    }  
    return !stack.length
};



console.log(isValid("()[]{}"))