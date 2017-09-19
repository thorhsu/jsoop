//es5
(function() {
    var a = 5;
    (function() {
        var a = 6;
        console.log(a);
    })();
    console.log(a);
})();
//es6
{
    let a = 7;
    {
        let a = 8;
        console.log(a);
    }
    console.log(a);
}