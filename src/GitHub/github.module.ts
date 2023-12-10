import { Module } from '@nestjs/common';
import { GithubController } from './handlers/controllers/github.controller';
import { GithubService } from './services/github.service';
import { RepositoryRequestService } from './services/repository.request.service';
import { ParserFactory } from './services/factories/parser/parser.factory';

@Module({
  controllers: [GithubController],
  providers: [GithubService, RepositoryRequestService, ParserFactory],
})
export class GithubModule {}
