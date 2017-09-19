function A(abc) {
    this.abc = abc;
}
A.prototype.show = function() {
    console.log(this.abc);
};
function B(abc) {
    A.call(this, abc);
}
B.prototype = new A(); //如此便不會影像到A的prototype
var objA = new A(2);
var objB = new B(5);
B.prototype.square = function(){
    return this.abc * this.abc;
}
console.log(objB.square());

