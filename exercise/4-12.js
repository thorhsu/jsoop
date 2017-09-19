var ten = "10";
var fifty = "50";
String.prototype.toNumber = function() {
    return parseInt(this);
}
console.log(ten.toNumber());