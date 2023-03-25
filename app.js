function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    showResult ? console.log(phrase + result) : console.log("falseだよ");
}
var printResult = true;
var resultString = "Result: ";
add(10, 5, printResult, resultString);
