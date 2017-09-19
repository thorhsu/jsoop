//es5
var obj = {
    name: {
        firstName: "John",
        lastName: "Lin"
    },
    age: 30,
    gender: "male"
};
var firstName = obj.name.firstName;
var lastName = obj.name.lastName;
var age = obj.age;
var gender = obj.gender;
console.log(firstName, lastName, age, gender);
//es6
var obj = {
    name: {
        firstName: "John",
        lastName: "Lin"
    },
    age: 30,
    gender: "male"
};
var {name: {lastName, firstName}, age, gender: sex} = obj; //sex也會變成male
console.log(firstName, lastName, age, gender, sex);
// console.log(name);