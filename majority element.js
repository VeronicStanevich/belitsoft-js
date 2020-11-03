/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement =function(nums){
    const numsMap=nums.reduce(function(counts,char) {
        if(counts[char]){
            counts[char]+=1;
        }
        else{
            counts[char] = 1;
        }
        return counts;
    },{});
    const  keysArr = Object.keys(numsMap);
    for(let i=0; i<=keysArr.length-1; i++){
        if(numsMap[keysArr[i]] >= nums.length/2){
            return keysArr[i];}
    }
}
