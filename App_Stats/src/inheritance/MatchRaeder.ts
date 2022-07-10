import { MatchResult } from "./MatchResult";
import { CsvFileReader } from "./CsvFileReader";
import { dateStringToDate } from "./util";

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchRaeder extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult, // Type asertion - утверждение(заявление) типа
      row[6],
    ];
  }
}
