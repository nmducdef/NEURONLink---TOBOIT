import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FunctionEntity } from 'src/module/function/entities/function.entity';
import { FunctionController } from './function.controller';
import { FunctionService } from './function.service';

@Module({
  imports: [TypeOrmModule.forFeature([FunctionEntity])],
  controllers: [FunctionController],
  providers: [FunctionService],
})
export class FunctionModule {}
