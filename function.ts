function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number) {
  console.log("Result:" + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(2, 3, (result) => {
  console.log(result);
});

//()に引数の型、=>先に戻り値の型を指定する
let combineValues: (a: number, b: number) => number;
combineValues = add;
//console.log(combineValues(1, 2));
