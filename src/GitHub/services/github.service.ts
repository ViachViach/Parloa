import { Injectable } from '@nestjs/common';
import { FilterDto } from '../dtos/filter.dto';
import { RepositoryDto } from '../dtos/repository.dto';
import { RepositoryRequestService } from './repository.request.service';
import { ParserFactory } from './factories/parser/parser.factory';
import { ParserTypeEnum } from '../enum/parser.type.enum';

@Injectable()
export class GithubService {
  constructor(
    private readonly requestService: RepositoryRequestService,
    private readonly parserFactory: ParserFactory,
  ) {}
  async getRepositories(filter: FilterDto) {
    const response = await this.requestService.get(filter);
    const repositories: RepositoryDto[] = await this.parserFactory
      .getParser(ParserTypeEnum.CSV)
      .parse(response.data);

    return this.filter(repositories, filter);
  }

  private filter(
    repositories: RepositoryDto[],
    filter: FilterDto,
  ): RepositoryDto[] {
    const result = repositories.filter(
      (item) => item.language === filter.language,
    );
    return result.slice(0, filter.limit);
  }
}
