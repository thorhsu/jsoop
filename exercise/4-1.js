//this會指向當前function(方法)屬於ary的物件
var ary = [1, 2, 3];
ary.a = 12;
ary.show = function() {
    console.log(this.a);
}
ary.show();

//this會指向當前function(方法)屬於document的物件
document.onclick = function() {
    console.log(this); //document所觸發，所以this === document
}

//this會指window
function show() {
    console.log(this);
}
show();

//同於下面的寫法
window.onclick = function() {
    console.log(this); //window所觸發，所以this === window
}