import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleEntity } from 'src/module/role/entities/role.entity';
import { UserRoleEntity } from 'src/module/role/entities/user-role.entity';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';

@Module({
  imports: [TypeOrmModule.forFeature([RoleEntity, UserRoleEntity])],
  controllers: [RoleController],
  providers: [RoleService],
})
export class RoleModule {}
