import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateRoleDto {
  @ApiProperty({
    example: 'CENTER_ADMIN',
    description: 'Mã role (viết hoa, không dấu, không khoảng trắng)',
    maxLength: 50,
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  roleCode: string;

  @ApiProperty({
    example: 'Quản lý trung tâm',
    description: 'Tên hiển thị của role',
    maxLength: 150,
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(150)
  roleName: string;
}
