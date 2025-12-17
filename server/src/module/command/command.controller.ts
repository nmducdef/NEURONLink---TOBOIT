import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateCommandDto } from 'src/module/command/dto/create-command.dto';
import { CommandService } from './command.service';

@ApiTags('Command Management')
@Controller('command')
@ApiBearerAuth('JWT-Auth')
export class CommandController {
  constructor(private readonly commandService: CommandService) {}

  @Get('get-list')
  getList() {
    return this.commandService.findAll();
  }

  @Post('create')
  create(@Body() dto: CreateCommandDto) {
    return this.commandService.create(dto);
  }
}
