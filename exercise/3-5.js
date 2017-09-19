//自動轉型(Bad)
console.log(0 == "");
console.log(1 == true);
console.log(2 == true); //ECMAScript 5.1 true會用ToNumber()轉換
console.log(0 == "0");
console.log(false == "false");
console.log(false == "0");
console.log("\t\r\n" == 0);





console.log("------------------");
//不自動轉型(Good)
//console.log(0 === "");
console.log(0 === "");
console.log(1 === true);
console.log(2 === true); //ECMAScript 5.1 true會用ToNumber()轉換
console.log(0 === "0");
console.log(false === "false");
console.log(false === "0");
console.log("\t\r\n" === 0);