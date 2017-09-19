var a = 100;
(
    function(){
        var b = true;
        console.log(a);
    }
)();
function run(){
    var b = true;
    console.log(a);
};
 console.log(b);