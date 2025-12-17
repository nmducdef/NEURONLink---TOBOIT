import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsString, Max, Min } from 'class-validator';

export class QueryCenterDto {
  @ApiPropertyOptional({
    example: 1,
    description: 'Trang hiện tại',
    minimum: 1,
    default: 1,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page?: number = 1;

  @ApiPropertyOptional({
    example: 10,
    description: 'Số bản ghi mỗi trang',
    minimum: 1,
    maximum: 100,
    default: 10,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  limit?: number = 10;

  @ApiPropertyOptional({
    example: 'Can thiệp ABC',
    description: 'Lọc theo tên trung tâm (LIKE)',
  })
  @IsOptional()
  @IsString()
  centerName?: string;

  @ApiPropertyOptional({
    example: '090',
    description: 'Lọc theo số điện thoại (LIKE)',
  })
  @IsOptional()
  @IsString()
  phone?: string;
}
