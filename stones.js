/* var lastStoneWeight = function(stones) {

    stones.sort(function(a,b){
        return a-b
    }).reverse();
    
    while(stones.length>1)
    {
        if(stones[0] === stones[1])
        {
            stones.splice(0,2)
        }
        else{
            stones[0] = stones[0] - stones[1]
            stones.splice(1,1)
            stones.sort(function(a,b){
      
                return a-b
            }).reverse();
        }
    }
   return stones.length === 0?  0:stones[0]
    
};

const last = lastStoneWeight([8,10,4])

console.log(last)
 */

/* var lastStoneWeight = function(stones) {
    
    stones.sort(function(a,b){
        return a-b
    }).reverse()
    var index = stones.indexOf(0)
    
   if (index === 0) return 0
   else if (index === 1) return stones[0]
   else if (index === 2) return stones[0] - stones[1]
   else if (index === 3) return Math.abs(stones[0] - stones[1] - stones[2])
   else{

    if(stones.length === 1) return stones[0]
    if(stones[0] === stones[1])
    {
        stones[0] = 0
        stones[1] = 0
    }

    else{
        stones[0] = stones[0] - stones[1]
        stones[1] = 0
    }
    return lastStoneWeight(stones)
   }
    
};

const last = lastStoneWeight([8,4,10])

 console.log(last) */


 /* var lastStoneWeight = function(stones) {

    stones.sort(function(a,b){
        return a-b
    })
    console.log(stones)
    let res = stones[stones.length-1]
    for (let i=stones.length -2; i>=0;i--)
    {
        res = Math.abs(res - stones[i])
    }

   return res
   
    
};

const last = lastStoneWeight([7,6,7,6,9])

 console.log(last) */