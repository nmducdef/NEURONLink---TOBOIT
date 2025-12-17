import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CenterEntity } from 'src/module/center/entities/center.entity';
import { PermissionModule } from 'src/module/permission/permission.module';
import { CenterController } from './center.controller';
import { CenterService } from './center.service';

@Module({
  imports: [TypeOrmModule.forFeature([CenterEntity]), PermissionModule],
  controllers: [CenterController],
  providers: [CenterService],
})
export class CenterModule {}
