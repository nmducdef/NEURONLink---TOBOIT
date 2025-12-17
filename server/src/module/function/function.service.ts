import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFunctionDto } from './dto/create-function.dto';
import { FunctionEntity } from './entities/function.entity';

@Injectable()
export class FunctionService {
  constructor(
    @InjectRepository(FunctionEntity)
    private readonly functionRepository: Repository<FunctionEntity>,
  ) {}

  async create(dto: CreateFunctionDto) {
    const { functionCode, functionName, path } = dto;

    const normalizedCode = functionCode.trim().toUpperCase();

    const exists = await this.functionRepository.findOne({
      where: { FunctionCode: normalizedCode },
    });

    if (exists) {
      throw new BadRequestException(`FunctionCode "${normalizedCode}" đã tồn tại`);
    }

    const func = this.functionRepository.create({
      FunctionCode: normalizedCode,
      FunctionName: functionName,
      Path: path,
    });

    return await this.functionRepository.save(func);
  }

  async findAll() {
    return await this.functionRepository.find({
      order: { FunctionID: 'ASC' },
    });
  }
}
