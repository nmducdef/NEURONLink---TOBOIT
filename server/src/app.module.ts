import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import databaseConfig from 'src/configuration/database.config';
import { AuthModule } from 'src/module/auth/auth.module';
import { CenterModule } from 'src/module/center/center.module';
import { CommandModule } from 'src/module/command/command.module';
import { FunctionModule } from 'src/module/function/function.module';
import { PermissionModule } from 'src/module/permission/permission.module';
import { RoleModule } from 'src/module/role/role.module';
import { UserModule } from 'src/module/user/user.module';
import { TransformInterceptor } from 'src/shared/core/transform.interceptor';
import { AccessTokenGuard } from 'src/shared/guards/access-token.guard';
import { PermissionGuard } from 'src/shared/guards/permission.guard';
import { SharedModule } from 'src/shared/shared.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [databaseConfig] }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => config.get('database'),
    }),
    SharedModule,
    AuthModule,
    UserModule,
    CenterModule,
    RoleModule,
    FunctionModule,
    PermissionModule,
    CommandModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_INTERCEPTOR, useClass: TransformInterceptor },
    { provide: APP_GUARD, useClass: AccessTokenGuard },
    { provide: APP_GUARD, useClass: PermissionGuard },
  ],
})
export class AppModule {}
