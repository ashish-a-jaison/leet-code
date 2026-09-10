/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
let nums=grid.flat(Infinity)
let negative=nums.filter(num=>num<0)
return negative.length
};
