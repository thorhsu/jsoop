var cat = {}; //實字模式等同 new Object()
cat.name = "kitty";
cat.getName = function() {
    return this.name;
};
//也可以這樣寫
var kitty = {
    name: "kitty",
    getName: function() {
        return this.name;
    }
};

console.log(cat.getName());
console.log(kitty.getName());