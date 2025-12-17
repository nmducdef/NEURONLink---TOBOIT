import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateCenterDto } from 'src/module/center/dto/create-center.dto';
import { QueryCenterDto } from 'src/module/center/dto/query-center.dto';
import { Permission } from 'src/shared/decorators/permission.decorator';
import { PermissionGuard } from 'src/shared/guards/permission.guard';
import { CenterService } from './center.service';

@ApiTags('Trung tâm')
@ApiBearerAuth('JWT-auth')
@Controller('center')
export class CenterController {
  constructor(private readonly centerService: CenterService) {}

  @Post('create')
  create(@Body() dto: CreateCenterDto) {
    return this.centerService.createCenter(dto);
  }

  @UseGuards(PermissionGuard)
  @Permission('CENTER.VIEW')
  @Get('get-list')
  async getCenters(@Query() query: QueryCenterDto) {
    return await this.centerService.getCenters(query);
  }
}
