let a = "100";
/*
a = 100;
a = 120;
a = 134;
//*/
console.log(a);
console.log(typeof a); //primitive
a.val = 100;
console.log(a.val);

var b = new String("100");
console.log(b);
console.log(typeof b); //object
b.val = 100;
console.log(b.val); //100
console.log(b);
console.log(typeof b.valueOf()); //string
console.log(b.valueOf());

b = new Number("100");
console.log(b);
console.log(typeof b); //object
b.val = 100;
console.log(b.val); //100
console.log(b);
console.log(typeof b.valueOf()); //string
console.log(b.valueOf());
