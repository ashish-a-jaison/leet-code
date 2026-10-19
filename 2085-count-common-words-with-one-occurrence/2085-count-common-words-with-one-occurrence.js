/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function (words1, words2) {
    return words1.filter(word => words1.indexOf(word) === words1.lastIndexOf(word) &&
        words2.indexOf(word) === words2.lastIndexOf(word) &&
        words2.includes(word)
    ).length
};