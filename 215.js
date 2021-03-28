var findKthLargest = function (nums, k) {

    return nums.sort((a,b)=>a-b)[nums.length - k]
};
