import fs from "fs";

export abstract class CSVFileReader<T> {
  data: T[] = [];  

  constructor(public filename: string) {}

  abstract mapRow(row: string[]): T;

  read(): void {
    const rows = fs
      .readFileSync(this.filename, {
        encoding: "utf-8",
      })
      .split("\n");

    const detailParts = rows.map((row: string): string[] => {
      return row.split(",");
    });

    const transformedData = detailParts.map(this.mapRow);

    this.data = transformedData;
  }
}
