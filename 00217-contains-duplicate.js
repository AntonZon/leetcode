export function containsDuplicate(nums) {
    let hash = {};
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] in hash) return true;
        else hash[nums[i]] = 1;
    }
    return false;
}