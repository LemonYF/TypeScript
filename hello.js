var content = '111';
console.log(content);
function z(x) {
    var x;
    var x;
    if (true) {
        var x;
    }
}
var x = 10;
function f(x) {
    var num = 100; // error: interferes with parameter declaration
}
function g() {
    var x = 100;
    var y = 100; // error: can't have both declarations of 'x'
}
function peintLabel(labelledobj) {
    console.log(labelledobj.label);
}
var myObj = {
    size: 10
};
peintLabel(myObj);
