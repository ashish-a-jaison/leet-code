/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let count=arr.map(num=>arr.filter(n=>n===num).length)
    let uniquecount=[...new Set(count)]
    return uniquecount.length===new Set(arr).size
};