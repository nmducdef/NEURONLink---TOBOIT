import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PermissionService } from 'src/module/permission/permission.service';
import { PERMISSIONS_KEY } from '../decorators/permission.decorator';
import { PermissionCacheService } from '../services/permission-cache.service';

@Injectable()
export class PermissionGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly permissionService: PermissionService,
    private readonly permissionCache: PermissionCacheService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredPermissions = this.reflector.get<string[]>(PERMISSIONS_KEY, context.getHandler()) || [];

    if (requiredPermissions.length === 0) return true;

    const request = context.switchToHttp().getRequest();
    const user = request.user;

    if (!user) return false;

    if (user.roles?.includes('ADMIN')) return true;

    let permissions = this.permissionCache.get(user.sub);

    if (!permissions) {
      permissions = await this.permissionService.getPermissionsByRoles(user.roles);
      this.permissionCache.set(user.sub, permissions);
    }

    return requiredPermissions.some((p) => permissions.includes(p));
  }
}
