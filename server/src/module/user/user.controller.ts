import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/module/user/dto/create-user.dto';
import { UserService } from './user.service';

@ApiTags('Người dùng')
@Controller('user')
@ApiBearerAuth('JWT-auth')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  @ApiOperation({ summary: 'Tạo người dùng' })
  async createUser(@Body() dto: CreateUserDto) {
    return this.userService.createUser(dto);
  }

  @Get('by-username/:username')
  @ApiOperation({ summary: 'Lấy người dùng theo username' })
  @ApiParam({
    name: 'username',
    example: 'admin_center_1',
  })
  async findByUsername(@Param('username') username: string) {
    return this.userService.findByUsername(username);
  }
}
