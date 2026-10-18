/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
   return result=paths.map(path=>path[1]).find(city=>!paths.some(path=>path[0]===city)) 
};