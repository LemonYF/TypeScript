// function printLabel(labelledObj: { label: string }) {
//     console.log(labelledObj.label);
// }
//
// let myObj = { size: 10, label: "Size 10 Object" };
// printLabel(myObj);
function peintLabel(labelledobj) {
    console.log(labelledobj.label);
}
var myObj = {
    size: 10,
    label: "hello world"
};
peintLabel(myObj);
// {color: string; area: number} 是返回参数检查
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "red" });
console.log(mySquare);
var p1 = { x: 10, y: 20 };
// p1.x = 5; // error!
var a = [1, 2, 3, 4];
var ro = a;
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a = ro; // error!
a = ro;
console.log(a);
/**
 * 还有最后一种跳过这些检查的方式，这可能会让你感到惊讶，
 * 它就是将这个对象赋值给一个另一个变量：
 * 因为 squareOptions不会经过额外属性检查，所以编译器不会报错。
 * **/
var squareOptions = { colour: "red", width: 100 };
var mySquare1 = createSquare(squareOptions);
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result;
};
