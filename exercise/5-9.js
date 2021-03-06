var util = {
    //幫忙做繼承。第一個ctor是子類別，第二個是父類別
    inherits: function(ctor, superCtor){
        var F = function(){} //暫存類別
        F.prototype = superCtor.prototype; //
        ctor.prototype = new F(); //讓子類別得到父類別的prototype
        ctor.uber = superCtor.prototype; //如果子和父類別的方法同名時，要使用uber方法去執行
        ctor.prototype.constructor = ctor; //用子類別的.constructor.uber.同名方法就可以呼叫到父類別的方法
    }
};

function A(abc) {
    this.abc = abc || 12;
    console.log("A class");
}
A.prototype.show = function() {
    console.log(this.abc);
};
function B() {
    A.apply(this, arguments);
}
util.inherits(B, A);
var objB = new B();
B.prototype.square = function(){
    console.log(this.abc * this.abc);
}
objB.square();