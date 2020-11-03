/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    return A.map(x=>x**2)
        .sort((a, b) => a-b);
};