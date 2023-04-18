import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Comfort } from './models/comfort.model';
import { CreateComfortDto } from './dto/create-comfort.dto';
import { UpdateComfortDto } from './dto/update-comfort.dto';

@Injectable()
export class ComfortService {
  constructor(@InjectModel(Comfort) private comfortRepo: typeof Comfort) {}

  async createComfort(createComfortDto: CreateComfortDto) {
    const newComfort = await this.comfortRepo.create(createComfortDto);
    return newComfort;
  }

  async getAllComforts() {
    const result = await this.comfortRepo.findAll({
      include: { all: true },
    });
    return result;
  }

  async getComfortById(id: number) {
    const result = await this.comfortRepo.findByPk(id);
    return result;
  }

  async updateComfort(id: number, updateComfortDto: UpdateComfortDto) {
    const result = await this.comfortRepo.update(updateComfortDto, {
      where: { id },
    });
    return result;
  }

  async deleteComfort(id: number): Promise<number> {
    const result = await this.comfortRepo.destroy({ where: { id } });
    return result;
  }
}
