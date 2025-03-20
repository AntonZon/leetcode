export function findDisappearedNumbers(nums) {
    let output = [];
    let seen = {};  
    nums.forEach(element => {
        seen[element]++;
    });
    for (let j = 1; j <= nums.length; j++)
        if (seen[j] == undefined)
            output.push(j);
    return output;

    // let output = [];
    // let seen = {};
    // nums.sort();
    // // nums.forEach(element => {
    // //     seen[element]++;
    // // });
    // for (let j = 0; j < nums.length; j++)
    //     if ((nums[j + 1]!= nums[j]) && (nums[j + 1] != nums[j] + 1)&&(j<nums.length-1)) 
    //     {
    //         output.push(nums[j] + 1); //добавляем первое пропущенное число
    //         while ( nums[j + 1] != (output[output.length-1] + 1)) {
    //             output.push(output[output.length-1] + 1);
    //         }
    //     }
    // return output;
};