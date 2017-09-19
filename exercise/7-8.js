//es5
function link1(height, color, url) {
    var height = height || 50;
    var color = color || "red";
    var url = url || "http://www.abc.com";
    console.log(height, color, url);
}
// link1(null, "Blue");
// link1(undefined, "", "http://www.xyz.com");
//es6
let link2 = (height = 50, color = "red", url="http://www.abc.com" ) => {
    console.log(height, color, url);
}


link2(undefined, "Blue");
link2(null, "Blue"); //只有undefined才會使用預設值
link2(undefined, "", "http://www.xyz.com");