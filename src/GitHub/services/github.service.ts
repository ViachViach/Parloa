import { Inject, Injectable} from '@nestjs/common';
import { FilterDto } from '../dtos/filter.dto';
import { RepositoryDto } from '../dtos/repository.dto';
import { RepositoryRequestService } from './repository.request.service';
import { ParserFactory } from './factories/parser/parser.factory';
import { ParserTypeEnum } from '../enum/parser.type.enum';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class GithubService {
  constructor(
    private readonly requestService: RepositoryRequestService,
    private readonly parserFactory: ParserFactory,
    @Inject(CACHE_MANAGER) private cacheService: Cache,
  ) {}
  async getRepositories(filter: FilterDto) {
    const repositories: RepositoryDto[] = await this.getData(filter);
    return this.filter(repositories, filter);
  }

  private async getData(filter: FilterDto): Promise<RepositoryDto[]> {
    const cachedData: RepositoryDto[] = await this.cacheService.get(
      filter.date,
    );
    if (cachedData) return cachedData;

    const response = await this.requestService.get(filter);
    const repositories: RepositoryDto[] = await this.parserFactory
      .getParser(ParserTypeEnum.CSV)
      .parse(response.data);

    await this.cacheService.set(filter.date, repositories);
    return repositories;
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
