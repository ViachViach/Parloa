import { ApiProperty } from '@nestjs/swagger';
import { IsISO8601, IsOptional, IsString } from 'class-validator';

export class FilterDto {
  @ApiProperty({ required: true })
  @IsISO8601()
  public date!: string;
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  public language?: string;
  @ApiProperty({ required: false })
  @IsOptional()
  public limit?: number;
}
