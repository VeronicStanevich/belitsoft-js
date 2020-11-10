/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const map = [...s].reduce(function(acc, currentItem){
        if(acc[currentItem]){
            acc[currentItem]+=1;
        }
        else{
            acc[currentItem]=1;
        }
        return acc;
    },{});

    for(const l of Object.keys(map)) {
        if(map[l] === 1)
            return s.indexOf(l);
    }

    return -1;
};