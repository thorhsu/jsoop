function A(abc) {
    this.abc = abc;
}
A.prototype.show = function() {
    console.log(this.abc);
};
function B(abc) {
    A.call(this, abc);
}
B.prototype = A.prototype;
var objA = new A(12);
var objB = new B(2);
B.prototype.square = function(){
    console.log(this.abc * this.abc);
}
objB.square();
objA.square(); //A居然也有square方法了