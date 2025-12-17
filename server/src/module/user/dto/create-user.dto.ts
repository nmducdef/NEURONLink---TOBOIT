import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'admin_center_1',
    description: 'Tên đăng nhập',
    maxLength: 50,
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  username: string;

  @ApiProperty({
    example: '123456',
    description: 'Mật khẩu (sẽ được hash trước khi lưu)',
    maxLength: 100,
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  password: string;

  @ApiPropertyOptional({
    example: 'Quản lý trung tâm',
    description: 'Họ và tên người dùng',
    maxLength: 150,
  })
  @IsOptional()
  @IsString()
  @MaxLength(150)
  fullName?: string;

  @ApiPropertyOptional({
    example: '0901234567',
    description: 'Số điện thoại',
    maxLength: 20,
  })
  @IsOptional()
  @IsString()
  @MaxLength(20)
  phone?: string;

  @ApiPropertyOptional({
    example: 'admin@center.com',
    description: 'Email',
    maxLength: 100,
  })
  @IsOptional()
  @IsEmail()
  @MaxLength(100)
  email?: string;

  @ApiPropertyOptional({})
  @IsOptional()
  @IsInt()
  centerId?: number;
}
