/**
 * @param {number[]} nums
 * @return {boolean}
 */
export function construct2DArray(nums , m, n) {
    let output = [];
    if (nums.length == m * n) {
        if (m==1) return nums;
        
        for (let j = 0; j < m; j++) {
            output[j] = [];
            for (let i = 0; i < n; i++) {
                output[j][i] = nums[j*n + i];
            }
        }
    }

    
    return output;
};