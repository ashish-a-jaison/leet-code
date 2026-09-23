/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    let reverse=image.map(a=>a.reverse())
    return reverse.map(img=>img.map(x=>x===1?0:1))
};