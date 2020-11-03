var plusOne = function (digits) {
    const number = BigInt(digits.join(''));
    return String(number + BigInt(1)).split("");
};