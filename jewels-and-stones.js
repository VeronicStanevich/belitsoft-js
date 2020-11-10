/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    const map = S.split("").reduce(function(acc, currentItem){
        if(acc[currentItem]){
            acc[currentItem]+=1;
        }
        else{
            acc[currentItem]=1;
        }
        return acc;
    },{});
    return [...J].reduce((acc, char) => (map[char] ? acc+map[char] : acc),0);
};