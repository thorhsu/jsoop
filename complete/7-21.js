//es5
function f1(obj) {
    var name = obj.name;
    var age = obj.age;
    console.log(name, age);
}
f1({name: "John", age: 30});
//es6
function f2({name:[me], age}) {
    console.log(me, age);
}
f2({name: ["John", "mary"], age: 30});