var o = new Object(100);
console.log(o.constructor); //__proto__會變成Number
var o1 = new Object("");
console.log(o1.constructor); //__proto__會變成String