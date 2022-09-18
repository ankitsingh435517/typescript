// annotations for primitives
let apples: number = 5;
let _name: string = "ankit";
let _status: boolean = false;

let nothingnull: null = null;
let nothingundefined: undefined = undefined;

let date: Date = new Date();

// annotations array of primitives
const colors: string[] = ["red", "blue", "green"];
// const numbers: number[] = [1, 2, 3];
const bools: boolean[] = [true, false];

// annotations for classes
class Car {}

const car: Car = new Car();

// annotations for object literals
const point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// annotations for functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// when to use annotations
// 1) function that returns the 'any' type
const json = '{"x": 10, "y":20 }';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // {x:10, y:20}

// 2) delayed initialization
const words = ["apple", "banana", "grape"];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "apple") {
    foundWord = true;
  }
}

// 3) when it can't be inferred
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
