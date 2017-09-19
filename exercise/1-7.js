function run(){
    console.log(arguments[0]);
    for(let argument of arguments)
       console.log(argument)
};

run(10, 20);