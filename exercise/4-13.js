function Person(name, gender, year) {
    this.name = name; //public
    this.gender = gender; //public
    function caclAge(y) { //private
        var today = new Date();
        return today.getFullYear() - y;
    }
    var age = caclAge(year); // private
    this.getAge = function() {
        return age;
    };
    this.showName = function() {
        console.log("my name:" + this.name);
    };
    this.showGender = function() {
        console.log("my gender:" + this.gender);
    };
}
// Person.prototype.showName = function() {
//     console.log("my name:" + this.name);
// };
// Person.prototype.showGender = function() {
//     console.log("my gender:" + this.gender);
// };
var p1 = new Person("Mark", "female", 1985);
var p2 = new Person("Jack", "male", 1978);
console.log(p1.getAge());
p2.showName();
console.log(p1.age);
