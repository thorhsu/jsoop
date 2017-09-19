var json = {
    name: "John",
    //function會被拿走，非標準JSON物件
    show: function() {
        console.log(this.name);
    },
    //undefined也不會被stringify
    empty: undefined,
    nothing: null
}
var jsonString = JSON.stringify(json);
console.log(jsonString);
console.log(JSON.parse(jsonString));