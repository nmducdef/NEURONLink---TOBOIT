import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePermissionDto } from 'src/module/permission/dto/create-permission.dto';
import { PermissionEntity } from 'src/module/permission/entities/permission.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PermissionService {
  constructor(@InjectRepository(PermissionEntity) private readonly permissionRepo: Repository<PermissionEntity>) {}

  async assignPermissions(dto: CreatePermissionDto) {
    const { roleId, functions } = dto;

    const permissionsToInsert: PermissionEntity[] = [];

    for (const func of functions) {
      for (const commandId of func.commands) {
        permissionsToInsert.push(
          this.permissionRepo.create({
            RoleID: roleId,
            FunctionID: func.functionId,
            CommandID: commandId,
          }),
        );
      }
    }

    await this.permissionRepo.delete({ RoleID: roleId });
    return await this.permissionRepo.save(permissionsToInsert);
  }

  async getPermissionsByRoles(roles: string[]): Promise<string[]> {
    if (!roles || roles.length === 0) return [];

    const placeholders = roles.map((_, i) => `@${i}`).join(',');

    const result = await this.permissionRepo.query(
      `
    SELECT DISTINCT
        f.FunctionCode + '.' + c.CommandCode AS permission
    FROM tbl_Permissions p
    JOIN tbl_Roles r ON p.RoleID = r.RoleID
    JOIN tbl_Functions f ON p.FunctionID = f.FunctionID
    JOIN tbl_Commands c ON p.CommandID = c.CommandID
    WHERE r.RoleCode IN (${placeholders})
    `,
      roles,
    );

    return result.map((r) => r.permission);
  }
}
