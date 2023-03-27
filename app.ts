let userInput: unknown;
let userName: string;

userInput = 5;
userName = "yuma";

//unknon型はif文を用いてチェックしないと代入することはできない
//anyならチェックなしで代入できる
if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

const result = generateError("error happend!", 500);
console.log(result);
