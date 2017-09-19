function createPerson(name, gender) {
    obj = new Object();
    obj.name = name;
    obj.gender = gender;
    obj.showName = function() {
        console.log("my name:" + this.name);
    }
    obj.showGender = function() {
        console.log("my gender:" + this.gender);
    }
    return obj;
}
var john = createPerson("John", "male");
var mary = createPerson("Mary", "female");
john.showName();
john.showGender();
mary.showName();
mary.showGender();
console.log(john.showName);
console.log(mary.showName);
console.log(john.showName === mary.showName); //不會相等

var d1 = new Date();
var d2 = new Date();
console.log(d1 === d2, ",", d1.getDate === d2.getDate);