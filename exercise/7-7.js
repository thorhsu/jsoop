//es5
document.show1 = function() {
    var that = this; //指向document
    ["how", "are", "you"].forEach(function(value) {
        var inner = this; //此處的this是["how", "are", "you"]
        var h2 = document.createElement("h2");
        h2.innerText = value;
        that.body.appendChild(h2);
    });
};
document.show1();
//es6
document.show2 = function() {
    ["how", "are", "your"].forEach((value) => {
        var h2 = document.createElement("h2");
        h2.innerText = value;
        this.body.appendChild(h2);
    });
};
document.show2();