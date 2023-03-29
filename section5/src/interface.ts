interface Named {
  name?: string;
  //任意のプロパティ
  outputName?: string;
}

//greetに加えてNamedインターフェースの内容も実装する必要がある
interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  //？をつけることで任意のパラメータを設定できる
  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string): void {
    if (this.name) {
      console.log(`${phrase} ${this.name}`);
    } else {
      console.log("No name.");
    }
  }
}

let user1 = new Person();

user1.greet("hello");

//関数型インターフェースの書き方
interface AddFn {
  (a: number, b: number): number;
}
const add: AddFn = (n1: number, n2: number) => {
  return n1 + n2;
};
