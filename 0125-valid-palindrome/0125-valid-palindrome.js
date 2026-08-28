/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let word = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    let word2= word.split("").reverse().join("");
    return word === word2;
};
console.log(isPalindrome("race a car"));