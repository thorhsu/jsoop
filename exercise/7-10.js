//es5
var xyz1 = ["x", "y", "z"];
var abc1 = ["a", "b", "c"];
console.log(abc1.concat(xyz1));
//es6
var xyz2 = ["x", "y", "z"];
var abc2 = ["a", "b", "c", ...xyz2];

console.log(abc2);