import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsInt, ValidateNested } from 'class-validator';

class FunctionPermissionDto {
  @ApiProperty({ example: 4 })
  @IsInt()
  functionId: number;

  @ApiProperty({ example: [1, 2, 3] })
  @IsArray()
  commands: number[];
}

export class CreatePermissionDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  roleId: number;

  @ApiProperty({ type: [FunctionPermissionDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FunctionPermissionDto)
  functions: FunctionPermissionDto[];
}
