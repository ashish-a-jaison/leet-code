/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    return nums.find(num=>nums.indexOf(num)===nums.lastIndexOf(num))
};
console.log([2,2,1])