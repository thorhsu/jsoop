var number = 10;
function Obj(n){

    if(this instanceof Obj){ //沒有new時無法設定變數
        this.name = 'Mark';
        this.number = n;
    }else{

    }
}

var obj = new Obj(55);
console.log(obj.number);