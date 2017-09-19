var g;
function outer(){
    var a = 100;
    function inner(){
        var b = 200;
        a = 200
        console.log(a);
        
    }
    console.log(a);
    g = inner;
}
outer();
console.log(g());