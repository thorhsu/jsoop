var cat = new Object();
cat.name = "kitty";
cat.getName = function() {
    return this.name;
}
console.log(cat.getName());