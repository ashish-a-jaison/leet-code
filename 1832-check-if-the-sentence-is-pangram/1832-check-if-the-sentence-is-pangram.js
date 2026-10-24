/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    return "abcdefghijklmnopqrstuvwxyz".split("").every(char=>sentence.includes(char))
};