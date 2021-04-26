var maxSubArray = function (nums) {
  function checkBig(a, b) {
    return a > b ? a : b;
  }

  if (nums.length === 1) return nums[0];
  let pre = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    pre = checkBig(nums[i], pre + nums[i]);
    max = checkBig(pre, max);
  }
  return max;
};
