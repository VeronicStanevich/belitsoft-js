/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
    const aNumber = BigInt(A.join(''));

    return String((aNumber + BigInt(K))).split("");
};