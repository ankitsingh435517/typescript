import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { HTMLReport } from "./reportTargets/HTMLReport";

export interface IAnalyzer {
    run(matches: MatchData[]): string;
}

export interface IOutputTarget {
    print(report: string): void;
}

export class Summary {
    static winsAnalysisWithHtmlReport(team: string): Summary{
        return new Summary(new WinsAnalysis(team), new HTMLReport());
    }

    constructor(public analyzer: IAnalyzer, public outputTarget: IOutputTarget){}

    buildAndPrintReport(matches: MatchData[]):void{
        const report = this.analyzer.run(matches);
        this.outputTarget.print(report);
    }
}