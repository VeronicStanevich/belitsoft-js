/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    const matrixCopy = matrix.map(v => [...v]);

    for (let i = matrix.length - 1; i >= 0; i--)
        for (let j = 0; j <= matrix.length - 1; j++)
            matrix[j][matrix.length - 1 - i] = matrixCopy[i][j];

};