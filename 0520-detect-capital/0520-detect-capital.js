/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let chars = word.split("")
    return chars.every(char => char === char.toUpperCase()) ||
           chars.every(char => char === char.toLowerCase()) ||
           (chars[0] === chars[0].toUpperCase() &&
            chars.slice(1).every(char => char === char.toLowerCase()))
}


