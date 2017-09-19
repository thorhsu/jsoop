var a = 1; 
(
    function(a){
        a = 100;
    }
)(a);
console.log(a);