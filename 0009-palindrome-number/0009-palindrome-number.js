/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let result= x.toString().split("").reverse().join("")
    let result2=x.toString()
    return result===result2
};
console.log(isPalindrome(121))