"use strict";
class Person {
    constructor(n) {
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(`${phrase} ${this.name}`);
        }
        else {
            console.log("No name.");
        }
    }
}
let user1 = new Person();
user1.greet("hello");
const add = (n1, n2) => {
    return n1 + n2;
};
