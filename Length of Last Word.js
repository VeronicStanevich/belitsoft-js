/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const arr = s.trim().split(" ");

    if (arr.length === 0) {
        return 0;
    }

    return arr[arr.length - 1].length;
};
