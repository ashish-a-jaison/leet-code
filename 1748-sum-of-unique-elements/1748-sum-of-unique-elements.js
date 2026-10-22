/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    return nums.filter(num=>nums.indexOf(num)===nums.lastIndexOf(num))
    .reduce((total,num)=>total+num,0)
};