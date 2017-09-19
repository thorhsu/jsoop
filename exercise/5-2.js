function base(){
    console.log(this, arguments);
}
base.call(5, 2, 3); //第一個參數必須傳入物件。如果是primitive type會自動轉成Object
base.apply({name: 'Mary'}, [2, 3]); //第一個參數必須傳入物件
base.bind({name: 'Jack'})(2, 3)

var a = {};
var MyObject = function(a, b){
    this.a = a;
    this.b = b;
}
MyObject.call(a, 2, 3);
console.log(a);
