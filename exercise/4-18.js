function Cat() {
    this.name = "kitty";
    this.getName = function() {
        return this.name;
    }
}
var myCat = new Cat();

var cat = new Object();
cat.name = "kitty";
cat.getName = function() {
    return this.name;
}

var kitty = {
    name: "kitty",
    getName: function() {
        return this.name;
    }
};
console.log(JSON.stringify(myCat));
console.log(JSON.stringify(cat));
console.log(JSON.stringify(kitty));