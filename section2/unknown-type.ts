let userInput: unknown;
let user_name: string;

userInput = 5;
user_name = "yuma";

//unknon型はif文を用いてチェックしないと代入することはできない
//anyならチェックなしで代入できる
if (typeof userInput === "string") {
  user_name = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

const result = generateError("error happend!", 500);
console.log(result);
