import { CsvFileReader } from "./CsvFileReader";
//! Enum - enumeration - перечисление - тип данных похожий на object
//* Основная цель - дать понять другим разработчикам , что все эти значения тесно связаны
//* Используется всякий раз, когда у нас есть небольшой фиксированный набор значений, которые все тесно связаны и известны во время компиляции

// import fs from "fs";
// const matches = fs
//   .readFileSync("football.csv", {
//     encoding: "utf-8",
//   })
//   .split("\n")
//   .map((row: string): string[] => {
//     return row.split(",");
//   });

/****************************************************************************************************** */

import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";
import { CsvFileReader } from "./CsvFileReader";

// const reader = new MatchRaeder("football.csv");
// reader.read();
// console.log(reader.data);

//! 1. Create an object that implement the DataReader interface

const csvFileReader = new CsvFileReader("football.csv");

//! 2. Create an object of MatchReader ans pass DataReader implementation

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

// matchReader.matches - сдесь храниться вся необходимая информация

let manUnitedWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} times`);
