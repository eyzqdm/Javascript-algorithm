/* 串中所有回文串 */
function all(s){
    let n = s.length
    let res = []
    function centerExpend(left,right){
        while(left >=0 && right < n && s[left] === s[right]){
            left--
            right++
        }
        left = left+1
        num = right-left
        if(num>=3) return s.substr(left,num)
        
    }
    for(var i=0;i<n;i++){
        var l1 = centerExpend(i,i)
        var l2 = centerExpend(i,i+1)
        if(l1) res.push(l1)
        if(l2) res.push(l2)
    }
    return res
}
console.log(all('abacftuutjiokoij'))