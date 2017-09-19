function myObject() {

}
//做為class時開頭是大寫
function MyObject() {

}
myObject();

//忘記new
var p = myObject();

//建構函式字首大寫(Good)
var q = new MyObject();