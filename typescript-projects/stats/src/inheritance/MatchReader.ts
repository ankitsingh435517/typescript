import { dateStringToDate } from "../utils";
import { matchResult } from "../MatchResult";
import { CSVFileReader } from "./CSVFileReader";
type MatchData = [Date, string, string, number, number, matchResult, string];

export interface IDataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  static fromCSV(filename: string): MatchReader {
    return new MatchReader(new CSVFileReader(filename));
  }
  matches: MatchData[] = [];
  constructor(public reader: IDataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): MatchData => {
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as matchResult,
        row[6],
      ];
    });
  }
}
