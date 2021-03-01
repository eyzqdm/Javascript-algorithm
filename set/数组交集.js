var intersection = function (nums1, nums2) {

    return ([...new Set(nums1)].filter(i => 
       nums2.includes(i)
    ))
};