/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if(nums.length<=1){
        return 0;
    }
    for(i=0; i<nums.length-1; i++){
        if(nums[i] > nums[i+1] && nums[i]>nums[i-1]){
            return i;
        } else if(nums[0] > nums[1]){
            return  0;
        } else if(nums[nums.length-1] > nums[nums.length-2]){
            return nums.length-1;
        }
    }
};