/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let result=nums.map(num=>num*num)
    return result.sort((a,b)=>a-b)
};
