/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
      let add1=nums.reduce((total,num)=>total+num,0)
  let add2=nums.join("").split("").map(Number)
  let digit=add2.reduce((sum,num)=>sum+num,0)
  return add1-digit
};