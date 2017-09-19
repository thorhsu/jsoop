function Person() {
    Object.defineProperty(this, "name", {
        value: "Mark",
        enumerable: true, //是否可被列舉
        writable: false, //不可寫入
        configurable: true
    });

}

function Guy() {
    var myData;
    Object.defineProperty(this, "name", {
        get: function() {
            return myData;
        },
        set: function(value) {
            myData = value;
        }
    });


}
Person.prototype.getName = function() {
    console.log(this.name);
};
var guy = new Guy();
guy.name = "Alice";
console.log(guy.name);
var p1 = new Person();
p1.getName();
p1.name = "John";
p1.getName();