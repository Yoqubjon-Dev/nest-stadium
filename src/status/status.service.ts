import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Status } from './models/status.model';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';

@Injectable()
export class StatusService {
  constructor(@InjectModel(Status) private statusRepo: typeof Status) {}

  async createStatus(createStatusDto: CreateStatusDto) {
    const newStatus = await this.statusRepo.create(createStatusDto);
    return newStatus;
  }

  async getAllStatuss() {
    const result = await this.statusRepo.findAll({
      include: { all: true },
    });
    return result;
  }

  async getStatusById(id: number) {
    const result = await this.statusRepo.findByPk(id);
    return result;
  }

  async updateStatus(id: number, updateStatusDto: UpdateStatusDto) {
    const result = await this.statusRepo.update(updateStatusDto, {
      where: { id },
    });
    return result;
  }

  async deleteStatus(id: number): Promise<number> {
    const result = await this.statusRepo.destroy({ where: { id } });
    return result;
  }
}
