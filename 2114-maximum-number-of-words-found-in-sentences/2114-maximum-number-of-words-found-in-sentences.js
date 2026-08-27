/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let result=sentences.reduce((word,total)=>word.split(" ").length>total.split(" ").length?word:total)

return result.split(" ").length
}
console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]))