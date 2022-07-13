"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
const MatchReader_1 = require("./MatchReader");
// import { CsvFileReader } from "./CsvFileReader";
// import { WinsAnalysis } from "./analyzers/WinsAnalysis";
const Summary_1 = require("./Summary");
// import { ConsoleReport } from "./reportTargets/ConsoleReport";
// import { HtmlReport } from "./reportTargets/HtmlReport";
// const reader = new MatchRaeder("football.csv");
// reader.read();
// console.log(reader.data);
//! 1. Create an object that implement the DataReader interface
// const csvFileReader = new CsvFileReader("football.csv");
//! 2. Create an object of MatchReader ans pass DataReader implementation
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();
const matchReader = MatchReader_1.MatchReader.fromCsv("football.csv");
matchReader.load();
// matchReader.matches - сдесь храниться вся необходимая информация
// const summary = new Summary(new WinsAnalysis("Man United"), new ConsoleReport());
// const summary = new Summary(new WinsAnalysis("Man United"), new HtmlReport());
const summary1 = Summary_1.Summary.winsAnalysisWithHtmlReport("Man United");
summary1.buildAndPrintReport(matchReader.matches);
