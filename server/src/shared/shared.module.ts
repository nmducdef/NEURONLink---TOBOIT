import { Global, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { HashingService } from 'src/shared/services/hashing.service';
import { PermissionCacheService } from 'src/shared/services/permission-cache.service';
import { TokenService } from 'src/shared/services/token.service';

const shareService = [HashingService, TokenService, PermissionCacheService];

@Global()
@Module({
  providers: shareService,
  exports: shareService,
  imports: [JwtModule.register({})],
})
export class SharedModule {}
