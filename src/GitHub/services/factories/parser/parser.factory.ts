import { Injectable } from '@nestjs/common';
import { ParserTypeEnum } from '../../../enum/parser.type.enum';
import { CsvParser } from './csv.parser';

@Injectable()
export class ParserFactory {
  getParser(type: ParserTypeEnum) {
    switch (type) {
      case ParserTypeEnum.CSV:
        return new CsvParser();
      default:
    }
  }
}
