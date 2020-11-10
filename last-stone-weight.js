/**
 * @param {number[]} stones
 * @return {number}
 */

var lastStoneWeight = function(stones) {
    let sortedStones = stones.sort((a,b) => a-b);
    while(sortedStones.length > 1) {
        sortedStones.push(sortedStones.pop()-sortedStones.pop());
        sortedStones = sortedStones.sort((a,b) => a-b);
    }

    return sortedStones[0];
};