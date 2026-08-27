/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
    let set= new Set()
    let count=0

    for(let word of words){
        let reverse=word.split("").reverse().join("")

        if(set.has(reverse)){
            count++
        }else{
            set.add(word)
        }
    }
    return count
};
console.log(maximumNumberOfStringPairs(["cd","ac","dc","ca","zz"]))