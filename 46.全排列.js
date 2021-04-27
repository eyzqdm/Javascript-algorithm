/* 回溯 有多条路 遇到走不通的路就返回重新走  递归
求全排列

 */
var permute = function(nums) {

   const res = []
   const rec = (path) => {
       if(path.length === nums.length){
           res.push(path)
           return
       }
       nums.forEach((n)=>{
           if(path.includes(n)) return
           rec(path.concat(n))
       })
   }
   rec([])
   return res
};
permute([1,2,3])