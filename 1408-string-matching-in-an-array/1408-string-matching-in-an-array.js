/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
    return words.filter(word => words.some(w => w.includes(word) && w !== word))
};