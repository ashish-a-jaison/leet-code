/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let result=[]
    for(let i=0;i<nums.length;i++){
     let answer=nums[i].toString().split("").map(Number)   
      result.push(...answer)
 }
 return result
    }
console.log(separateDigits([13,25,83,77]))