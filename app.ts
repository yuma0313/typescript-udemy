function add(n1: number, n2: number, showResult, phrase) {
  const result = n1 + n2;
  showResult ? console.log(phrase + result) : console.log("falseだよ");
}

const printResult = true;
const resultString = "Result: ";

add(10, 5, printResult, resultString);
