/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numsMap = {};

    for(let i=0; i<nums.length; i++){
        const delta = target - nums[i];
        if(delta in numsMap){
            return [numsMap[delta], i];
        }

        numsMap[nums[i]] = i;
    }

};