import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateCommandDto {
  @ApiProperty({
    example: 'CREATE',
    description: 'Mã command (duy nhất, viết HOA)',
    maxLength: 100,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  commandCode: string;

  @ApiProperty({
    example: 'Tạo mới',
    description: 'Tên hiển thị của command',
    maxLength: 150,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  commandName: string;
}
