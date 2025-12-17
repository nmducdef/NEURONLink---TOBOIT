import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreatePermissionDto } from 'src/module/permission/dto/create-permission.dto';
import { PermissionService } from './permission.service';

@ApiBearerAuth('JWT-auth')
@ApiTags('Permission Management')
@Controller('permission')
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) {}

  @Post('assign')
  assignPermissions(@Body() dto: CreatePermissionDto) {
    return this.permissionService.assignPermissions(dto);
  }

  @Get('get-permissions-by-roles')
  getPermissionsByRoles(@Req() req: any) {
    const roles = req.user.roles;
    return this.permissionService.getPermissionsByRoles(roles);
  }
}
