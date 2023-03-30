"use strict";
const names = ["Yuma", "Sara"];
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObject = merge({ name: "Yuma", hobbies: ["TypeScript"] }, { age: 24 });
console.log(mergedObject.hobbies);
function countAndDescribe(element) {
    let descriptionText = "値がありません";
    if (element.length > 0) {
        descriptionText = `値は${element.length}個です`;
    }
    return [element, descriptionText];
}
console.log(countAndDescribe("お疲れ様です"));
function extractAndConvert(obj, key) {
    return console.log(`Value ${obj[key]}`);
}
extractAndConvert({ name: "Max" }, "name");
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("data1");
textStorage.addItem("data2");
textStorage.removeItem("data1");
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
function createCourseGoal(title, description, date) {
    return {
        title: title,
        description: description,
        completeUntil: date,
    };
}
