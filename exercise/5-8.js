function A(abc) {
    this.abc = abc || 12;
    console.log("A class");
}
A.prototype.show = function() {
    console.log(this.abc);
};
function B() {
    A.apply(this, arguments); //用arguments就可以不用再帶參數了
}

B.prototype = new A();
var objB = new B(11);

B.prototype.square = function(){
    console.log(this.abc * this.abc);
}
objB.square();