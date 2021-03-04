/*
 * @Author: your name
 * @Date: 2021-02-22 18:22:11
 * @LastEditTime: 2021-03-04 19:07:51
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \JavaScript-algorithm\动态规划\子序列最大和.js
 */
var maxSubArray = function (nums) {

    function checkBig(a, b) {

        return a > b ? a : b
    }


    if (nums.length === 1) return nums[0]
    let pre = nums[0]
    let max = nums[0]

    for (let i = 1; i < nums.length; i++) {

        pre = checkBig(nums[i], pre + nums[i])
        max = checkBig(pre,max)
    }
    return max
};