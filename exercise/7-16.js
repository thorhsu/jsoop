//es5
var obj = {
    foo: function(a, b) {
        console.log(a, b, this);
    },
    bar: function(x, y) {
        console.log(x, y, this);
    }
};
obj.foo(10,30);
obj.foo(20,40);
//es6
var obj = {
    foo(a, b) {
        console.log(a, b, this);
    },
    bar(x, y) {
        console.log(x, y, this);
    },
    test: (a, b) => {
        console.log(a, b, this); //this會指到最上層，在瀏覽器是window
    } 

};
obj.foo(10,30);
obj.foo(20,40);
obj.test(30, 40);