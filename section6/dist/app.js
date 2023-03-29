"use strict";
var _a;
const e1 = {
    name: "Yuma",
    privileges: ["create-server"],
    startDate: new Date(),
};
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add("hello ", "関数オーバーロード");
console.log(result.split(" "));
const fetchedUserData = {
    name: "Yuma",
    id: "1",
    job: {
        title: "Enginner",
        description: "noob",
    },
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const t = null;
const t2 = t !== null && t !== void 0 ? t : "NULL合体演算子";
console.log(t2);
function printEmployeeInformation(emp) {
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
    loadCargo(amount) {
        console.log(`荷物を乗せています:${amount}`);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(100);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
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
const userInputElement = document.getElementById("user-input");
userInputElement.value = "型キャスト";
const errorBack = {
    email: "正しいメールアドレスではありません",
    userName: "ユーザー名が重複しています",
};
