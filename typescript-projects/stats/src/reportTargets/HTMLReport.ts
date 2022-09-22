import fs from 'fs';
import { IOutputTarget } from "../Summary";

export class HTMLReport implements IOutputTarget {
  print(report: string): void {
    const html = `
        <div>
            <h1>${report}</h1>
        </div>
      `;
      fs.writeFileSync('report.html',html);
  }
}
