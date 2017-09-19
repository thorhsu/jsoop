//自動加上分號(Bad)
var a = 1
if (a) {
    console.log("OK")
}




//不會自動加上分號(Bad)
var a = 1(function() {
    return "xxx"
})()