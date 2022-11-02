"use strict";
//Basic types
let id = 5;
let company = "CITICAN";
let isPublished = true;
let x = "Hello";
let age;
x = true;
age = 30;
//Arrays and Tuples
let ids = [1, 2, 3];
let arr = ["hi", 1, true];
let tuple = [1, "Hello", true];
let tupleArray;
tupleArray = [
    [1, "Hi"],
    [2, "World"],
];
//Unions
let newId = 22;
newId = "ashse";
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const p1 = 1;
const user = {
    id: 1,
    name: "John",
};
//Type Assertion
let cid = 1;
//let customerId =<number>cid;
let customerId = cid;
//Functions
const addNumber = (x, y) => {
    return x + y;
};
const log = (message) => {
    console.log(message);
};
const user01 = {
    id: 1,
    name: "John",
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, "Brad");
//Subclass
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(1, "Javier", "Junior Dev");
//Generics
const getArray = (items) => {
    return new Array().concat(items);
};
let numArray = getArray([1, 2, 3, 5]);
let stringArray = getArray(["Brad", "Juan", "John"]);
console.log(brad.register());
console.log(emp.register());
