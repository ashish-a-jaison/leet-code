/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
   return s.split("").findIndex(char=>{
    return s.indexOf(char)===s.lastIndexOf(char)
   })
};
console.log(firstUniqChar("leetcode"))