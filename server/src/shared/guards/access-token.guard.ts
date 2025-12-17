import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { REQUEST_USER_KEY } from 'src/shared/constants/auth.constant';
import { IS_PUBLIC_KEY } from 'src/shared/decorators/customize';
import { TokenService } from 'src/shared/services/token.service';

@Injectable()
export class AccessTokenGuard implements CanActivate {
  constructor(
    private readonly tokenService: TokenService,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.get<boolean>(IS_PUBLIC_KEY, context.getHandler());
    if (isPublic) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const accessToken = request.headers.authorization?.split(' ')[1];

    if (!accessToken) {
      throw new UnauthorizedException();
    }

    try {
      const decodeAccessToken = await this.tokenService.verifyAccessToken(accessToken);

      request[REQUEST_USER_KEY] = decodeAccessToken;
      return true;
    } catch (err) {
      throw new UnauthorizedException();
    }
  }
}
