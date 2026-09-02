/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    let result=title.split(" ").map(word=>{
        if(word.length<=2){
            return word.toLowerCase()
        }
       return word[0].toUpperCase()+word.slice(1).toLowerCase()
    }).join(" ")
    return result
};
console.log(capitalizeTitle("capiTalIze tHe titLe"));