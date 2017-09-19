//es5
var obj = {
    name: "John",
    age: 30,
    gender: "male"
};
var name = obj.name;
var age = obj.age;
var gender = obj.gender;
console.log(name, age, gender);
//es6
var obj = {
    name: "Johnson",
    age: 32,
    gender: "male"
};
var {name,  gender, age} = obj
console.log(name, age, gender);