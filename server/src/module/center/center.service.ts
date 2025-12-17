import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCenterDto } from 'src/module/center/dto/create-center.dto';
import { QueryCenterDto } from 'src/module/center/dto/query-center.dto';
import { CenterEntity } from 'src/module/center/entities/center.entity';
import { Like, Repository } from 'typeorm';

@Injectable()
export class CenterService {
  constructor(@InjectRepository(CenterEntity) private readonly centerRepository: Repository<CenterEntity>) {}

  async createCenter(dto: CreateCenterDto) {
    const existedCenter = await this.centerRepository.findOne({
      where: { CenterName: dto.centerName },
    });

    if (existedCenter) {
      throw new BadRequestException('Center name already exists');
    }

    const center = this.centerRepository.create({
      CenterName: dto.centerName,
      Address: dto.address,
      Phone: dto.phone,
      Email: dto.email,
      Status: 'ACTIVE',
    });

    return await this.centerRepository.save(center);
  }

  async getCenters(query: QueryCenterDto) {
    const { page = 1, limit = 10, centerName, phone } = query;

    const skip = (page - 1) * limit;

    const where: any = {};

    if (centerName) {
      where.CenterName = Like(`%${centerName}%`);
    }

    if (phone) {
      where.Phone = Like(`%${phone}%`);
    }

    const [centers, total] = await this.centerRepository.findAndCount({
      where,
      skip,
      take: limit,
      order: {
        CreatedAt: 'DESC',
      },
    });

    return {
      data: centers,
      meta: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }
}
