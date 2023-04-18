import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Stadium } from './models/stadium.model';
import { CreateStadiumDto } from './dto/create-stadium.dto';
import { UpdateStadiumDto } from './dto/update-stadium.dto';

@Injectable()
export class StadiumService {
  constructor(@InjectModel(Stadium) private stadiumRepo: typeof Stadium) {}

  async createStadium(createStadiumDto: CreateStadiumDto) {
    const newStadium = await this.stadiumRepo.create(createStadiumDto);
    return newStadium;
  }

  async getAllStadiums() {
    const result = await this.stadiumRepo.findAll({ include: { all: true } });
    return result;
  }

  async getStadiumById(id: number) {
    const result = await this.stadiumRepo.findByPk(id);
    return result;
  }

  async updateStadium(id: number, updateStadiumDto: UpdateStadiumDto) {
    const result = await this.stadiumRepo.update(updateStadiumDto, {
      where: { id },
    });
    return result;
  }

  async deleteStadium(id: number): Promise<number> {
    const result = await this.stadiumRepo.destroy({ where: { id } });
    return result;
  }
}
