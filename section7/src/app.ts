//Genericとは
const names: Array<string> = ["Yuma", "Sara"]; //string[]と同じ

//変数promiseに返す型を指定できる
// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("終わりました");
//   }, 2000);
// });

// promise.then((data) => {
//   data.length;
// });

//Generic関数　識別子TypeのTとアルファベットのTの次のUを指定するのが慣習
//extendsをつけることで制約をつけることができる
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObject = merge(
  { name: "Yuma", hobbies: ["TypeScript"] },
  { age: 24 }
);
console.log(mergedObject.hobbies);

//もう一つのGeneric関数
interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "値がありません";
  if (element.length > 0) {
    descriptionText = `値は${element.length}個です`;
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("お疲れ様です"));

//keyof制約
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return console.log(`Value ${obj[key]}`);
}

extractAndConvert({ name: "Max" }, "name");

//Genericクラス
class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("data1");
textStorage.addItem("data2");
textStorage.removeItem("data1");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

//Generic型のユーティリティ
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  return {
    title: title,
    description: description,
    completeUntil: date,
  };
}
