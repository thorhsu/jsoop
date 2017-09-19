// (function(){
//     "use strict";
//     console.log(Date.now());
//     setTimeout(arguments.callee, 1000);
// })();

// (function a(){
//     "use strict";
//     console.log(Date.now());
//     setTimeout(a, 1000);
// })();
"use strict";
var array = [1, 2, 3, 4, 5];
delete array[0];
console.log(array);
