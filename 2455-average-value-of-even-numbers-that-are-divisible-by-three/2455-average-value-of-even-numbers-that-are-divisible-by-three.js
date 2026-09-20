/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
     let evennum=nums.filter(num=>num%2===0)
     let divisible=evennum.filter(num=>num%3===0)
     if(divisible.length===0){
        return 0
     }
     let average=Math.floor(divisible.reduce((total,num)=>total+num,0)/divisible.length)
     return average
};