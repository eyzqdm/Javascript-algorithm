/* 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。你可以假设 nums1 的空间大小等于 m + n，这样它就有足够的空间保存来自 nums2 的元素。
*/

/* 

输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
输出：[1,2,2,3,5,6]
*/

var merge = function (nums1, m, nums2, n) {
    
  while (m > 0 && n > 0) {
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[m + n - 1] = nums1[m - 1];
      m--;
    } else {
      nums1[m + n - 1] = nums2[n - 1];
      n--;
    }
  }
if(n!==0){
   
    while(n){
        nums1[n-1] = nums2[n-1]
        n--
    }
}
  return nums1;
};

let nums1 = [1];
let nums2 = [0];
console.log(merge(nums1, 1, nums2, 0));
