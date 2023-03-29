type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

//2つの型を結合する交差型
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Yuma",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;
//ユニオン型の型結合では一致するnumber型になる
type Universal = Combinable & Numeric;

function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

//関数オーバーロード 25行目,26行目
const result = add("hello ", "関数オーバーロード");
console.log(result.split(" "));

//オプショナルチェイン
const fetchedUserData = {
  name: "Yuma",
  id: "1",
  job: {
    title: "Enginner",
    description: "noob",
  },
};
//?の前にあるものがなければその後ろのものにはアクセスしない
console.log(fetchedUserData?.job?.title);

//NULL合体演算子
const t = null;
//nullまたはundefinedのとき??を使うことでデフォルト値を指定できる
const t2 = t ?? "NULL合体演算子";
console.log(t2);

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log(emp.name);
  if ("privileges" in emp) {
    console.log(`privileges: ${emp.privileges}`);
  }
  if ("startDate" in emp) {
    console.log(`startDate: ${emp.startDate}`);
  }
}

printEmployeeInformation(e1);

class Car {
  drive() {
    console.log("運転中");
  }
}

class Truck {
  drive() {
    console.log("トラックを運転中");
  }

  loadCargo(amount: number) {
    console.log(`荷物を乗せています:${amount}`);
  }
}

type Vehicle = Truck | Car;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  //型ガードは instanceof や in を使う
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(100);
  }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  //Animal型を判別するためのプロパティ
  type: "bird";
  flyingSpeed: number;
}
interface Horse {
  //Animal型を判別するためのプロパティ
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  //Union型を判別する
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log(`移動速度:${speed}`);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });

//型キャスト
// const userInputElement = <HTMLInputElement>(
//   document.getElementById("user-input")!
// );
const userInputElement = document.getElementById(
  "user-input"
)! as HTMLInputElement;
userInputElement.value = "型キャスト";

//インデックス型
interface ErrorContainer {
  //プロパティ名string,値もstringを指定
  [prop: string]: string;
}

//プロパティ名string,値もstringで代入する
const errorBack: ErrorContainer = {
  email: "正しいメールアドレスではありません",
  userName: "ユーザー名が重複しています",
};
