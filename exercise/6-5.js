//Decorator
function Computer(){
    this.cost = function(){
        return 41900;
    }
}
function addMemory(pc){ //每增加記憶體多增加$10000
    var v = pc.cost();
    pc.cost = function(){
        return v + 10000;
    }
}

function addEngraving(pc){  //加上刻字加1000
    var v = pc.cost();
    pc.cost = function(){
        return v + 1000;
    }
}

function addInsurance(pc){   //加保險加8590
    var v = pc.cost();
    pc.cost = function(){
        return v + 8590;
    }
}

var mb = new Computer();
// addMemory(mb);
addEngraving(mb);
addInsurance(mb);
console.log(mb.cost());