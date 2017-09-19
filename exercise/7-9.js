//es5
function run1(a, b) {
    console.log(arguments);
}
run1(10, 20, 30);
//es6
let run2 = (a, b, ...params) => {
    console.log(params);
    console.log(params[0]);
    console.log(arguments);// arrow function內無arguments
}


run2(10, 20, 30, 40);