//es5
var Shape1 = function(id, x, y) {
    this.id = id;
    this.move(x, y);
};
Shape1.prototype.move = function(x, y) {
    this.x = x;
    this.y = y;
};
var a = new Shape1("a", 0, 0);
console.log(a);
//es6

class Shape2 {
    //初始化時一定會執行
    constructor(id, x, ...params){

        this.id = id;
        if(params.length === 0)
          this.move(x, 100);
        else
          this.move(x, params[0]);
    }
    move(x, y){
        this.x = x;
        this.y = y;
    }
}
var a = new Shape2("a", 1, 3);
console.log(a);

var a = new Shape2("a", 0);
console.log(a);
// Shape2.move(3, 4);