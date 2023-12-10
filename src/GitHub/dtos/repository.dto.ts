import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class RepositoryDto {
  @ApiProperty()
  @IsString()
  rank: string;
  @ApiProperty()
  @IsString()
  item: string;
  @ApiProperty()
  @IsString()
  repo_name: string;
  @ApiProperty()
  @IsString()
  stars: string;
  @ApiProperty()
  @IsString()
  forks: string;
  @ApiProperty()
  @IsString()
  language: string;
  @ApiProperty()
  @IsString()
  repo_url: string;
  @ApiProperty()
  @IsString()
  username: string;
  @ApiProperty()
  @IsString()
  issues: string;
  @ApiProperty()
  @IsString()
  last_commit: string;
  @ApiProperty()
  @IsString()
  description: string;
}
