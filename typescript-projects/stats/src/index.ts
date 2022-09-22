import { MatchReader } from "./inheritance/MatchReader";
import { Summary } from "./Summary";

const matchReader = MatchReader.fromCSV("src/football.csv");
const summary = Summary.winsAnalysisWithHtmlReport("Man United");

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);