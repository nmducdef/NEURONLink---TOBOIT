import { Body, Controller, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateRoleDto } from 'src/module/role/dto/creaate-role.dto';
import { Public } from 'src/shared/decorators/customize';
import { RoleService } from './role.service';

@ApiTags('Role Management')
@Controller('role')
@ApiBearerAuth('JWT-auth')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Public()
  @Post('create')
  createRole(@Body() dto: CreateRoleDto) {
    return this.roleService.createRole(dto);
  }
}
