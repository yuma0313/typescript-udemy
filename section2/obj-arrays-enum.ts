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

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "yuma",
  age: "24",
  hobbies: ["kpop", "netflix"],
  role: Role.ADMIN,
};

console.log(person);
