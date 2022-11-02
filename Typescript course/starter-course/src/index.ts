//Basic types
let id:number = 5;
let company:string = "CITICAN";
let isPublished:boolean = true;
let x:any = "Hello";
let age:number;

x = true;
age = 30;

//Arrays and Tuples
let ids:number[] = [1, 2, 3];
let arr:any[] = ["hi", 1, true];

let tuple:[number, string, boolean] = [1, "Hello", true];

let tupleArray:[number, string][];
tupleArray = [
    [1, "Hi"],
    [2, "World"],
]

//Unions
let newId:string|number = 22;
newId = "ashse";

//Enum
enum Direction1 {
    Up,
    Down,
    Left,
    Right
}

enum Direction2 {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right",
}

//Objects
type User = { 
    id:number, 
    name:string 
}

type Point = number | string;
const p1:Point = 1

const user:User = {
    id: 1,
    name: "John",
}

//Type Assertion
let cid:any = 1;
//let customerId =<number>cid;
let customerId = cid as number;

//Functions
const addNumber = (x:number, y:number):number => {
    return x + y;
}

const log = (message:string|number):void => {
    console.log(message);
}

//Interfaces
interface UserInterface {
    readonly id:number, //Can't be edited
    name:string,
    age?:number, //optional
}

const user01: UserInterface = {
    id: 1,
    name: "John",
}

interface MathFunction {
    (x: number, y:number):number
}

const add:MathFunction = (x:number, y:number):number => x + y;
const sub:MathFunction = (x:number, y:number):number => x - y;

//Classes

interface PersonInterface {
    id:number,
    name:string,
    register():string,
}

class Person implements PersonInterface {
    id:number //private, protected, public
    name:string

    constructor(id:number, name:string) {
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
    position: string;

    constructor(id:number, name:string, position:string,) {
        super(id, name);
        this.position = position;
    }
}

const emp = new Employee(1, "Javier", "Junior Dev");

//Generics
const getArray = <T>(items:T[]):T[] => {
    return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 5]);
let stringArray = getArray<string>(["Brad", "Juan", "John"]);


console.log(brad.register());
console.log(emp.register());