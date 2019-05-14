// function printLabel(labelledObj: { label: string }) {
//     console.log(labelledObj.label);
// }
//
// let myObj = { size: 10, label: "Size 10 Object" };
// printLabel(myObj);

interface LabelledValue {
    label: string;
}

function peintLabel(labelledobj: LabelledValue) {
    console.log(labelledobj.label)
}

let myObj = {
    size: 10,
    label: "hello world"
}

peintLabel(myObj)


/**
 * 接口里的属性不全都是必需的。 有些是只在某些条件下存在，或者根本不存在。
 * 可选属性在应用“option bags”模式时很常用，即给函数传入的参数对象中只有部分属性赋值了。
 * **/
interface SquareConfig {
    color?: string
    width?: number
}
// {color: string; area: number} 是返回参数检查
function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color: "red"});
console.log(mySquare)

/****/
/**
 * 接口只读属性
 * **/
interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // error!

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a = ro; // error!
a = ro as number[];
console.log(a)

/**
 * 索引签名
 * 我们要表示的是SquareConfig可以有任意数量的属性，并且只要它们不是color和width，
 * 那么就无所谓它们的类型是什么
 * **/

interface SquareConfig1 {
    color?: string;
    width?: number;
    [propName: string]: any;
}

/**
 * 还有最后一种跳过这些检查的方式，这可能会让你感到惊讶，
 * 它就是将这个对象赋值给一个另一个变量：
 * 因为 squareOptions不会经过额外属性检查，所以编译器不会报错。
 * **/
let squareOptions = { colour: "red", width: 100 };
let mySquare1 = createSquare(squareOptions);

/**
 * 函数类型
 * 接口也可以描述函数类型
 * 为了使用接口表示函数类型，我们需要给接口定义一个调用签名
 * 它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型
 * **/

interface SearchFunc {
    // 定义了传入参数类型 和 返回布尔类型
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}
