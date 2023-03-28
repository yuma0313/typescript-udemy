"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result:" + num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(2, 3, (result) => {
    console.log(result);
});
//()に引数の型、=>先に戻り値の型を指定する
let combineValues;
combineValues = add;
//console.log(combineValues(1, 2));
