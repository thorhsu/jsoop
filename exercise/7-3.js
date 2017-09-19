//es5
Object.defineProperty(typeof global === "object" ? global : window, "DATA1", {
    value: {
        content: "abc"
    },
    enumerable: true,
    writable: false,
    configurable: false
});
DATA1.content = "xyz";
console.log(DATA1.content);
//es6
const DATA2 = {
    content: "abc"
}

//物件型態時，內容是可以被修改的。但不能重新assign值
DATA2.content = "xyz";
console.log(DATA2.content);
//會出錯
DATA2 = {};