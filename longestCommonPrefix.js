/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if(!strs.length) {
        return '';
    }

    const originalStr = strs[0];
    let prefix = '';

    for (let j = 0; j < originalStr.length; j++) {
        const originalStrChar = originalStr[j];

        if (strs.every(s => s[j] === originalStrChar)) {
            prefix += originalStrChar;
        }
        else{
            break;
        }
    }

    return prefix;
};