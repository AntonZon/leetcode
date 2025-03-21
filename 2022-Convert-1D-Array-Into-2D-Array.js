/**
 * @param {number[]} nums
 * @return {boolean}
 */
export function construct2DArray(original, m, n) {
    let output[][];
    for (let j = 0; j < m; j++) {
        for (let i = 0; i < n - 1; i++) {
            output[j][i]=original[j*n+i];
        }
    }
    return output;
};