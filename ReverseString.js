/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    const arr = [];

    for(let i = 0; i <= s.length-1; i++) {
        arr[i] = s[s.length-1-i];
    }

    return arr;
};