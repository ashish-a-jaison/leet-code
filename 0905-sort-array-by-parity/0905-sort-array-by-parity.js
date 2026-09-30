/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
       let even=nums.filter(num=>num%2===0)
   let odd=nums.filter(num=>num%2!==0)
   even.sort(()=>Math.random()-0.5)
   odd.sort(()=>Math.random()-0.5)
   return [...even,...odd]
};