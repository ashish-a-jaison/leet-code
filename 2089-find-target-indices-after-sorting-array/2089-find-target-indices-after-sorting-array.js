/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
   let targettedarray=nums.sort((a,b)=>a-b)
   return targettedarray.map((num,index)=>num===target?index:-1).filter(index=>index!==-1)
};