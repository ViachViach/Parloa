import { Module } from '@nestjs/common';
import { GithubModule } from './GitHub/github.module';

@Module({
  imports: [GithubModule],
})
export class AppModule {}
