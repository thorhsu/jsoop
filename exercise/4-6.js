var ary1 = new Array(12, 55, 43, 32, 44);
ary1.sum = function() {
    var total = 0;
    this.forEach(function(element) {
        total += element;
    }, this);
    return total;
}
console.log(ary1.sum());