/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
   return Math.max(...accounts.map(account=>
   account.reduce((total,num)=>total+num,0
   )))
};