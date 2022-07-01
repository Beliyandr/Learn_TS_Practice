let oranges: number = 5;
let speed: string = "fast";
let hasDog: boolean = true;

let nothing: null = null;
let nothing1: undefined = undefined;

//built-in object  встроенные объекты

let now: Date = new Date();

///////////////////////////
// array

let colors: string[] = ["red", "yellow", "5"];
let numbers: number[] = [5, 12, 5, 77];
let results: boolean[] = [true, false, false];

// classes

class Car {}

let car: Car = new Car();

// object literal

let poin: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// functions

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//! when to use type annotations
// 1) Function returns the 'any' type

const json = '{"x": 10, "y":20}';

const coordinates: { x: number; y: number } = JSON.parse(json);

console.log(coordinates);

// 2) When we declare a variable on the line and initialize it later

let words = ["one", "two", "three"];

let isTwo: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "two") {
    isTwo = true;
  }
}

// 3) Variables whoew type can't be inferred

let myNumbers = [-10, -1, 12];
let positiveNumber: boolean | number = false;

for (let i=0; i<myNumbers.length; i++){
  if(myNumbers[i] > 0){
    positiveNumber = myNumbers[i]
  }
}
