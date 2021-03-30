function test(k, nums) {
  return [...new Set([...nums.sort((a,b)=>b-a)])][k-1];
}

console.log(test(1,[1,3,5,5,4,5,4,4,2]))