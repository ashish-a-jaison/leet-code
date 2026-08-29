/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels=s.split("").filter(char=>{
        return "aeiouAEIOU".includes(char)
    })
    vowels.reverse()
    let result=s.split("").map(char=>{
        if("aeiouAEIOU".includes(char)){
            return vowels.shift()
        }
        return char
    })
    return result.join("")
};
console.log(reverseVowels("IceCreAm"))