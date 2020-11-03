/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let sum = [];
    for(let i=0; i < arr2.length; i++){
        let arr3 = arr1.filter(num => num == arr2[i]);
        arr1 = arr1.filter(num => num != arr2[i]).sort((a, b) => a-b);
        sum.push(...arr3);
    }
    return sum.concat(arr1);
};