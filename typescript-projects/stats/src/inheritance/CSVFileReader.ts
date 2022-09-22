import fs from "fs";
import { IDataReader } from "./MatchReader";

export class CSVFileReader implements IDataReader {
  data: string[][] = [];

  constructor(public filename: string) {}

  read(): void {
    const rows = fs
      .readFileSync(this.filename, {
        encoding: "utf-8",
      })
      .split("\n");

    this.data = rows.map((row: string): string[] => {
      return row.split(",");
    });
  }
}
