//Strategy Pattern

var data = {
    name: "Mary",
    message: 'I am lucky'
}

var Sender = function(strategy){
    this.strategy = strategy;
}

Sender.prototype.send = function(data){
    return this.strategy.send(data);
}

var xmlStrategy = {
    send: function(data){
        var str = "<xml><name>" + data.name + "</name><message>" + data.message + "</message></xml>";
        // console.log("Data:" + str);
        return str;
    }
};

var jsonStrategy = {
    send: function(data){
        var str = JSON.stringify(data);
        // console.log("Data:" + str);
        return str;
    }
};

var xmlSender = new Sender(xmlStrategy);
console.log(xmlSender.send(data));
var jsonSender = new Sender(jsonStrategy);
console.log(jsonSender.send(data));