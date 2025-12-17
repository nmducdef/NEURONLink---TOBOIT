import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateFunctionDto {
  @ApiProperty({
    example: 'USER',
    description: 'Mã function (duy nhất, viết HOA)',
    maxLength: 100,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  functionCode: string;

  @ApiProperty({
    example: 'Quản lý người dùng',
    description: 'Tên hiển thị của function',
    maxLength: 150,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  functionName: string;

  @ApiPropertyOptional({
    example: '/users',
    description: 'Path FE (menu/router), có thể null',
    maxLength: 255,
  })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  path?: string;
}
