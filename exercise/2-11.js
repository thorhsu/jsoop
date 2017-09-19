function m(x){
    return function n(y){
        return x * y
    };
}
var func = m(2); 
console.log(func(3));
console.log(func(4));
console.log(func(5));
console.log(func(6));
console.log(func(7));
console.log(func(8));