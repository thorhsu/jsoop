//共享參考
var arr1 = [1, 2, 3];
var arr2 = arr1;
arr2.push(4);
console.log(arr2.concat(5));
console.log(arr2);
console.log(arr1);

//避免共享參考
var arr1 = [1, 2, 3];
var arr3 = arr1.slice();
arr3.push(4);
console.log(arr3);
console.log(arr1);
