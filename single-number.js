/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const map = nums.reduce((acc, currentItem) =>{
        if(acc[currentItem]){
            acc[currentItem]+=1;
        }
        else{
            acc[currentItem]=1;
        }
        return acc;
    }, {})
    return nums.find((key) => {
        if(map[key]===1){
            return true;
        }
        return false;
    });
};