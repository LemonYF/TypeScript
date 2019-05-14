let content: string = '111'
console.log(content)

function z(x) {
    var x;
    var x;

    if (true) {
        var x;
    }
}
let x = 10;
function f(x) {
    let num = 100; // error: interferes with parameter declaration
}

function g() {
    let x = 100;
    var y = 100; // error: can't have both declarations of 'x'
}

// for (let i = 0; i < 10 ; i++) {
//     // console.log(i)
//     // 为什么下面的延时没有按照乘法进行
//     setTimeout(function() {
//         console.log(i);
//     }, i *1000 );
// }
// for(var i =1; i<10; i++){
//     (function(a){
//         var data = 123456;
//         setTimeout(function(){
//             console.log(data);
//         }, a*2000);
//     })(i);
// }


