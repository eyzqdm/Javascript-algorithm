Array.prototype.myReduce = function (cb,init){

  this.forEach((item,index) => {
     if(init !== 'undeifined')
     {
         init = cb(init,item,index,this)
     }
     else {
         init = cb(0,item,index,this)
     }
  })

  return init

}

const arr = [1,2,3,4,4,4]

const sum = arr.myReduce((pre,cur) => {
    return pre+cur
},2) 

console.log(sum) // 20