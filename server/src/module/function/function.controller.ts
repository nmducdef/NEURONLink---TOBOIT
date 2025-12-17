import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateFunctionDto } from 'src/module/function/dto/create-function.dto';
import { FunctionService } from './function.service';

@ApiTags('Function Management')
@Controller('function')
@ApiBearerAuth('JWT-auth')
export class FunctionController {
  constructor(private readonly functionService: FunctionService) {}

  @Post('create')
  create(@Body() dto: CreateFunctionDto) {
    return this.functionService.create(dto);
  }

  @Get('get-list')
  findAll() {
    return this.functionService.findAll();
  }
}
