import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommandEntity } from 'src/module/command/entities/command.entity';
import { CommandController } from './command.controller';
import { CommandService } from './command.service';

@Module({
  imports: [TypeOrmModule.forFeature([CommandEntity])],
  controllers: [CommandController],
  providers: [CommandService],
})
export class CommandModule {}
