import { MatchData } from "../MatchData";
import { IAnalyzer } from "../Summary";
import { matchResult } from "../MatchResult";

export class WinsAnalysis implements IAnalyzer {
  constructor(public team: string) {}
  run(matches: MatchData[]): string {
    let wins = 0;
    for (let match of matches) {
      if (match[1] === "Man United" && match[5] === matchResult.HomeWin) {
        wins++;
      } else if (
        match[2] === "Man United" &&
        match[5] === matchResult.AwayWin
      ) {
        wins++;
      }
    }
    return `Team ${this.team} won ${wins} matches`;
  }
}
