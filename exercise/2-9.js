for(var i = 1 ; i <= 5; i++){
    (function(i){
        setTimeout(function(){
            console.log(i);
        }, i * 1000)
    })(i);
}

for(var i = 1 ; i <= 5; i++){
    setTimeout(function(i){
        console.log(i);
    }, i * 1000, i);
}

for(var i = 1 ; i <= 5; i++){
    setTimeout(function(i){
        console.log(this.valueOf());
    }.bind(i), i * 1000)
   
}