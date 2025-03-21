/**
 * @param {number[]} nums
 * @return {number[]}
 */
export function productExceptSelf(nums) {
    let result = [];
    // for (let i=0; i<nums.length; i++) {
    //     result[i]=1;
    //     for (let j=0; j<nums.length; j++) {
    //         if (i!=j) result[i]=result[i]*nums[j]+0; 
    //     }
    // }
    let product = 1;
    let isnulls = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) product *= nums[i];
        else isnulls++;
    }

    for (let i = 0; i < nums.length; i++) {
        if (isnulls > 1) result[i] = 0;
        else
            if (isnulls < 1) result[i] = product / nums[i];
            else
                if (isnulls = 1) {
                    if (nums[i] != 0) result[i] = 0;
                    else result[i] = product;
                }
    }

    return result;
};