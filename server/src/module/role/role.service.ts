import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRoleDto } from 'src/module/role/dto/creaate-role.dto';
import { RoleEntity } from 'src/module/role/entities/role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoleService {
  constructor(@InjectRepository(RoleEntity) private readonly roleRepository: Repository<RoleEntity>) {}

  async createRole(dto: CreateRoleDto) {
    const roleCode = dto.roleCode.trim().toUpperCase();

    const existedRole = await this.roleRepository.findOne({
      where: { RoleCode: roleCode },
    });

    if (existedRole) {
      throw new BadRequestException('Role code already exists');
    }

    const role = this.roleRepository.create({
      RoleCode: roleCode,
      RoleName: dto.roleName,
    });

    return await this.roleRepository.save(role);
  }
}
