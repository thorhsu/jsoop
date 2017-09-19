var name = "A";
var obj = {
    name: "B",
    getName: function(){
        // var self = this;
        return function(){
            return this.name;
        }
    }
}
var result = obj.getName();
console.log(result());
console.log(name);