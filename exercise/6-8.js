var car = {
    startEngine: function(){console.log("Start Enging");},
    stopEngine: function(){console.log("Stop Enging");},    
    run: function(){console.log("runing");}
}

function ProxyCar(car){
    var isStarted = false;
    this.startEngine = function () {
        if (isStarted) {
            console.log("It is already started");
        } else {
            car.startEngine();
            isStarted = true;
        }
    }
    this.stopEngine = function () {
        if (isStarted) {
            console.log("It is already stopped");
        } else {
            car.stopEngine();
            isStarted = false;
        }
    }

    this.run = function(){
       if(!isStarted){
           console.log("You have to start the engine at first");
       }else{
           car.run();
       }
    }
};
var proxyCar = new ProxyCar(car);
proxyCar.run();
proxyCar.stopEngine();
proxyCar.startEngine();
proxyCar.run();