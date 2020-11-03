/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let difference = 0;

    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = prices.length; j >= i; j--) {
            const newDiff = prices[j] - prices[i];
            if (difference < newDiff) {
                difference = newDiff;
            }
        }
    }

    return difference;
};