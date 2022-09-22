import { IOutputTarget } from "../Summary";

export class ConsoleReport implements IOutputTarget {
    print(report: string): void {
        console.log(report);
    }
}