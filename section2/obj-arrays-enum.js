"use strict";
// const person: {
//   name: string;
//   age: string;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "yuma",
//   age: "24",
//   hobbies: ["kpop", "netflix"],
//   role: [2, "author"],
// };
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: "yuma",
    age: "24",
    hobbies: ["kpop", "netflix"],
    role: Role.ADMIN,
};
console.log(person);
