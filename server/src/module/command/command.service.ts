import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCommandDto } from 'src/module/command/dto/create-command.dto';
import { CommandEntity } from 'src/module/command/entities/command.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CommandService {
  constructor(@InjectRepository(CommandEntity) private readonly commandRepository: Repository<CommandEntity>) {}

  async findAll() {
    return await this.commandRepository.find({
      order: {
        CommandID: 'ASC',
      },
    });
  }

  async create(dto: CreateCommandDto) {
    const { commandCode, commandName } = dto;

    const exists = await this.commandRepository.findOne({
      where: { CommandCode: commandCode },
    });

    if (exists) {
      throw new BadRequestException(`CommandCode "${commandCode}" đã tồn tại`);
    }

    const command = this.commandRepository.create({
      CommandCode: commandCode,
      CommandName: commandName,
    });

    return await this.commandRepository.save(command);
  }
}
