/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const map1 = nums1.reduce(function(acc, currentItem){
        if(acc[currentItem]){
            acc[currentItem]+=1;
        }
        else{
            acc[currentItem]=1;
        }
        return acc;
    },{});

    const map2 = nums2.reduce(function(acc, currentItem){
        if(acc[currentItem]){
            acc[currentItem]+=1;
        }
        else{
            acc[currentItem]=1;
        }
        return acc;
    },{});

    let res = [];

    for (const key of Object.keys(map1)) {
        if(key in map2) {
            const count = map1[key] > map2[key] ? map2[key] : map1[key];

            for(let i = 0; i< count; i++) {
                res.push(key);
            }
        }
    }

    return [...new Set(res)];
};