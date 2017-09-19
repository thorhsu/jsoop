//es5
var url="http://www.abc.com";
var name="www.abc.com";
var link = "<a href=\"" + url + "\">" + name + "</a>"+ + (5*3) ;
console.log(link);
//es6
var url="http://www.abc.com";
var name="www.abc.com";
var link = `<a href="${url}">${name}</a>${5*3}`;
console.log(link);