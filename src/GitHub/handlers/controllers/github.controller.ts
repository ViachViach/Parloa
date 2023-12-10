import {
  Controller,
  Get,
  HttpCode,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { FilterDto } from '../../dtos/filter.dto';
import { GithubService } from '../../services/github.service';
import { defaultValidationPipeConfig } from '../../validation/validation-pipe.config';
import { RepositoryDto } from '../../dtos/repository.dto';

@Controller('v1/github')
@ApiTags('GitHub V1')
export class GithubController {
  constructor(private readonly gitHubService: GithubService) {}
  @Get()
  @HttpCode(200)
  @UsePipes(new ValidationPipe(defaultValidationPipeConfig))
  @ApiResponse({ type: RepositoryDto, status: 200, isArray: true })
  public async get(@Query() query: FilterDto) {
    return await this.gitHubService.getRepositories(query);
  }
}
