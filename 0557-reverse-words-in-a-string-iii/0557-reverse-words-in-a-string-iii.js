/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
     let result=""
    let reverse=s.split(" ").map(word=>word.split("").reverse().join("")).join(" ")
    return reverse+=result
};