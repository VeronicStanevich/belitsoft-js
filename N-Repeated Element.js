/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    const map = A.reduce(function(acc, currentItem){
        if(acc[currentItem]){
            acc[currentItem]+=1;
        }
        else{
            acc[currentItem]=1;
        }
        return acc;
    },{});

    return A.find((key) => {
        if(map[key]>=A.length/2){
            return true;
        }
        return false;
    });
};