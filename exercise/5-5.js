function A() {
    this.abc = 12;
}
A.prototype.show = function() {
    console.log(this.abc);
};
function B() {
    A.call(this);
}
B.prototype = A.prototype; //把A 的原型指給B，但B.prototype被改， A也會被改變
var obj = new B();
console.log(obj.abc);
obj.show();