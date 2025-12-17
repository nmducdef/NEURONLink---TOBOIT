import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateCenterDto {
  @ApiProperty({
    example: 'Trung tâm Can thiệp ABC',
    description: 'Tên trung tâm',
    maxLength: 150,
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(150)
  centerName: string;

  @ApiPropertyOptional({
    example: 'Số 123 Nguyễn Trãi, Hà Nội',
    description: 'Địa chỉ trung tâm',
    maxLength: 255,
  })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  address?: string;

  @ApiPropertyOptional({
    example: '0901234567',
    description: 'Số điện thoại trung tâm',
    maxLength: 20,
  })
  @IsOptional()
  @IsString()
  @MaxLength(20)
  phone?: string;

  @ApiPropertyOptional({
    example: 'contact@center.com',
    description: 'Email trung tâm',
    maxLength: 100,
  })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  email?: string;
}
