const colors: string[] = ["red", "blue", "yellow"];

const data = [new Date(), new Date()];

const fruitsByColor = [["tomato"], ["apple"], ["lemon"]];

const fruitsByColor1: string[][] = [];

//! Help with inference when extracting values

const color = colors[0];
const color1 = colors.pop();

//! Prevent oncompatible values

// colors.push(true);

//! Help with 'map'

colors.map((color: string): string => {
  return color.toUpperCase();
});

//! Flexible types

const importandDates: (Date | string | number)[] = [
  new Date(),
  "12.05.22",
  "2021-11-11",
];

importandDates.push("11-11-2021");
importandDates.push(new Date());
importandDates.push(123);
