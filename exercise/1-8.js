function run(){
    var args = new Array();
    for(argument of arguments){
        args.push(argument);
    }
    // console.log(typeof args);
    // console.log(typeof arguments);    
    args.map(function(a){
        console.log(a);
    });
}

run(10, 20, 30, 40, 50);