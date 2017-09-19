function A(a) {
    this.abc = a;
    //如果寫在建構式中這個run會一直被重覆產生出來
    this.run = function() { 
        console.log("go", this.abc);
    };
}
A.prototype.show = function() {
    console.log(this.abc);
};

function B(b){
    A.call(this, b); //會把this傳給A，如此便可以繼承A
}
var obj = new B(12);
var a = new A(94);
console.log(obj.abc);
obj.run();
console.log(a.abc);
a.run();
