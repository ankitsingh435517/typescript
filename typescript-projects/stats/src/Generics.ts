class HoldAnything<T> {
  constructor(public data: T) {}
}

const holdNumber = new HoldAnything<number>(2);
console.log(holdNumber.data);
const holdString = new HoldAnything<String>("sos");
console.log(holdString.data);
const obj: { a: number; b: number } = { a: 1, b: 2 };
const holdObject = new HoldAnything<{ a: number; b: number }>(obj);
console.log(holdObject.data);

const arr: number[] = [1, 2, 3, 4];
const holdArray = new HoldAnything<number[]>(arr);
console.log(holdArray.data);
