function Person(name, gender) {
    this.name = name;
    this.gender = gender;

}
Person.prototype.showName = function() {
    console.log("my name:" + this.name);
}
Person.prototype.showGender = function() {
    console.log("my gender:" + this.gender);
}

var john = new Person("John", "male");
var mary = new Person("Mary", "female");
john.showName();
john.showGender();
console.log(john.showName === mary.showName); //會相等