/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
let even=nums.filter(num=>num.toString().length%2===0)
return even.length
};