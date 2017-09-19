var ary1 = new Array(12, 55, 43, 32, 44);
var ary2 = new Array(12, 33, 1);
Array.prototype.sum = function() {
    var total = 0;
    this.forEach(function(element) {
        total += element;
    }, this);
    return total;
}
console.log(ary1.sum());
console.log(ary2.sum());
console.log(ary1.sum === ary2.sum);