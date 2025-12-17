import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/module/user/dto/create-user.dto';
import { UserEntity } from 'src/module/user/entities/user.entity';
import { HashingService } from 'src/shared/services/hashing.service';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>,
    private readonly hashingService: HashingService,
  ) {}

  async createUser(dto: CreateUserDto) {
    const existedUser = await this.userRepository.findOne({
      where: { Username: dto.username },
    });

    if (existedUser) {
      throw new BadRequestException('Username already exists');
    }

    const hashedPassword = await this.hashingService.hash(dto.password);

    const user = this.userRepository.create({
      Username: dto.username,
      Password: hashedPassword,
      FullName: dto.fullName,
      Phone: dto.phone,
      Email: dto.email,
      CenterID: dto.centerId,
      Status: 'ACTIVE',
    });

    return await this.userRepository.save(user);
  }

  async findByUsername(username: string): Promise<UserEntity | null> {
    return await this.userRepository.findOne({
      where: {
        Username: username,
        Status: 'ACTIVE',
      },
    });
  }

  async findRolesByUserId(userId: number): Promise<string[]> {
    const result = await this.userRepository.query(
      `
    SELECT DISTINCT r.RoleCode
    FROM tbl_UserRoles ur
    JOIN tbl_Roles r ON ur.RoleID = r.RoleID
    WHERE ur.UserID = @0
    `,
      [userId],
    );

    return result.map((r) => r.RoleCode);
  }
}
