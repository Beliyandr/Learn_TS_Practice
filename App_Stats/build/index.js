"use strict";
//! Enum - enumeration - перечисление - тип данных похожий на object
//* Основная цель - дать понять другим разработчикам , что все эти значения тесно связаны
//* Используется всякий раз, когда у нас есть небольшой фиксированный набор значений, которые все тесно связаны и известны во время компиляции
Object.defineProperty(exports, "__esModule", { value: true });
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
const MatchRaeder_1 = require("./MatchRaeder");
const MatchResult_1 = require("./MatchResult");
const reader = new MatchRaeder_1.MatchRaeder("football.csv");
reader.read();
// console.log(reader.data);
let manUnitedWins = 0;
for (let match of reader.data) {
    if (match[1] === "Man United" && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === "Man United" && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(`Man United won ${manUnitedWins} times`);
