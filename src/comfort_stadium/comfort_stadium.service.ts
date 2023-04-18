import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ComfortStadium } from './models/comfort_stadium.model';
import { UpdateComfortStadiumDto } from './dto/update-comfort_stadium.dto';
import { CreateComfortStadiumDto } from './dto/create-comfort_stadium.dto';

@Injectable()
export class ComfortStadiumService {
  constructor(
    @InjectModel(ComfortStadium)
    private comfortStadiumRepo: typeof ComfortStadium,
  ) {}

  async createComfortStadium(createComfortDto: CreateComfortStadiumDto) {
    const newComfortStadium = await this.comfortStadiumRepo.create(
      createComfortDto,
    );
    return newComfortStadium;
  }

  async getAllComfortStadiums() {
    const result = await this.comfortStadiumRepo.findAll({
      include: { all: true },
    });
    return result;
  }

  async getComfortStadiumById(id: number) {
    const result = await this.comfortStadiumRepo.findByPk(id);
    return result;
  }

  async updateComfortStadium(
    id: number,
    updateComfortStadiumDto: UpdateComfortStadiumDto,
  ) {
    const result = await this.comfortStadiumRepo.update(
      updateComfortStadiumDto,
      { where: { id } },
    );
    return result;
  }

  async deleteComfortStadium(id: number): Promise<number> {
    const result = await this.comfortStadiumRepo.destroy({ where: { id } });
    return result;
  }
}
