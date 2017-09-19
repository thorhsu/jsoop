var MessageCenter = {
    //事件的訂閱者放在此
    list: {
        // click:[
        // {
        //     obj: UserA,
        //     callback:function(msg){
        //         console.log("xxxxx");
        //     }
        // }
        // ]
    },     
    emit: function(type, message) { //什麼事件，訊息是什麼
        if (this.list[type]) {
            console.log(type, ":tennis");
            for (var i = 0; i < this.list[type].length; i++) {
                this.list[type][i].callback(message);
            }
        }
    },
    //綁定事件
    on: function(obj, type, callback) {
        //看看訂閱者訂閱的事件是不是存在，如果沒有就回傳空白
        this.list[type] = this.list[type] || []; 
        this.list[type].push({
            obj: obj,
            callback: callback
        });
    },
    //移除事件
    off: function(obj, type) {
        if (this.list[type]) {
            for (var i = 0; i < this.list[type].length; i++) {
                if (this.list[type][i].obj === obj) {
                    this.list[type].splice(i,1);
                    i--; //被splice後，index會少一
                }
            }
        }
    }
};
function User(messageCenter) {
    this.messageCenter = messageCenter;
}
User.prototype.addEvent = function(type, callback) {
    this.messageCenter.on(this, type, callback);
};
User.prototype.removeEvent = function(type) {
    this.messageCenter.off(this, type);
};
var UserA = new User(MessageCenter);
UserA.addEvent("todo", function(msg) {
    console.log("UserA todo:" + msg);
});
UserA.addEvent("test", function(msg) {
    console.log("UserA test:" + msg);
});
var UserB = new User(MessageCenter);
UserB.addEvent("todo", function(msg) {
    console.log("UserB todo:" + msg);
});
var UserC = new User(MessageCenter);
UserC.addEvent("test", function(msg) {
    console.log("UserC test:" + msg);
});
MessageCenter.emit("todo", "News");
MessageCenter.emit("test", "Word");