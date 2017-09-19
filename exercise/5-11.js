Object.prototype.inherits = function(superCtor) {
    var F = function(){} //暫存類別
    F.prototype = superCtor.prototype; //
    this.prototype = new F(); //讓子類別得到父類別的prototype
    this.uber = superCtor.prototype; //如果子和父類別的方法同名時，要使用uber方法去執行
    this.prototype.constructor = this; //用子類別的.constructor.uber.同名方法就可以呼叫到父類別的方法
}

var Point = function(){
    this.a = 0;
    this.a = 0
    //this.x = x || x;
    //this.y = y || y; 
}
Point.prototype.write = function(a, b){
    this.a = a;
    this.b = b;
}
Point.prototype.read = function(){
    return {a: this.a, b: this.b};
}

var point = new Point();
point.write(1, 5);
console.log(point.read());

var RangePoint = function(min, max){
    Point.apply(this, arguments);
    this.min = min;
    this.max = max;
}
RangePoint.inherits(Point);
RangePoint.prototype.write = function(x, y){
    x = x < this.min? this.min : x;
    x = x > this.max? this.max : x;
    y = y < this.min? this.min : y;
    y = y > this.max? this.max : y;
    RangePoint.uber.write.apply(this, arguments); //不能使用在use strict
    //RangePoint.uber.write.apply(this, x, y); //使用use strict時 
}

var rangePoint = new RangePoint(2, 5);
rangePoint.write(1, 6);
console.log(rangePoint.read());

var IntegerRangePoint = function(min, max){
    RangePoint.apply(this, arguments);
}
IntegerRangePoint.inherits(RangePoint);
IntegerRangePoint.prototype.write = function(x, y){
    x = Math.round(x);
    y = Math.round(y);
    IntegerRangePoint.uber.write.apply(this, arguments);
}

var irp = new IntegerRangePoint(1, 10);
irp.write(9.1, 7.8);
console.log(irp.read());
