import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  compare(leftIdx: number, rightIdx: number): boolean {
    return this.data[leftIdx].toLowerCase() > this.data[rightIdx].toLowerCase();
  }

  swap(leftIdx: number, rightIdx: number): void {
    const chars = this.data.split("");
    const temp = chars[leftIdx];
    chars[leftIdx] = chars[rightIdx];
    chars[rightIdx] = temp;
    this.data = chars.join("");
  }

  get length(): number {
    return this.data.length;
  }
}
