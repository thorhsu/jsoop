function Person(name, gender) {
    //var this = new Object(); 
    this.name = name;
    this.gender = gender;
    this.showName = function() {
        console.log("my name:" + this.name);
    }
    this.showGender = function() {
            console.log("my gender:" + this.gender);
        }
        // return obj;
}
var john = new Person("John", "male");
var mary = new Person("Mary", "female");
john.showName();
john.showGender();
console.log(john.showName === mary.showName); //不會相等