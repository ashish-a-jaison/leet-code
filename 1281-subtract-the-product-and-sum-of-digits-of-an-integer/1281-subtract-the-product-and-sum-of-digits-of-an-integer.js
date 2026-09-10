/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
   let a=n.toString().split("").reduce((multiply,num)=>multiply*num,1)
   let b=n.toString().split("").reduce((add,num)=>add+Number(num),0)
   return a-b
};