/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    let final=original
    while(nums.includes(final)){
        final=final*2
    }
    return final
};