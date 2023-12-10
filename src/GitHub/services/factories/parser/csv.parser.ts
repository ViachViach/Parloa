import { ParserInterface } from './parser.interface';
import csv = require('csvtojson');

export class CsvParser implements ParserInterface {
  parse(data: string) {
    return csv().fromString(data);
  }
}
