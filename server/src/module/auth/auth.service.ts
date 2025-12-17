import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from 'src/module/auth/dto/login.dto';
import { UserService } from 'src/module/user/user.service';
import { HashingService } from 'src/shared/services/hashing.service';
import { TokenService } from 'src/shared/services/token.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly hashingServer: HashingService,
    private readonly tokenService: TokenService,
    private readonly userService: UserService,
  ) {}

  async login(loginRequestDto: LoginDto) {
    const user = await this.userService.findByUsername(loginRequestDto.username);

    if (!user) {
      throw new UnauthorizedException('Sai tài khoản hoặc mật khẩu');
    }

    const isPasswordValid = await this.hashingServer.compare(loginRequestDto.password, user.Password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Sai tài khoản hoặc mật khẩu');
    }

    const roles = await this.userService.findRolesByUserId(user.UserID);

    const payload = {
      sub: user.UserID,
      username: user.Username,
      center: user.CenterID,
      roles,
    };

    const accessToken = await this.tokenService.signAccessToken(payload);
    const refreshToken = await this.tokenService.signRefreshToken(payload);

    return { accessToken, refreshToken, roles };
  }
}
