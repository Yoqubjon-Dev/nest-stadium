import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { StadiumTime } from './models/stadium_time.model';
import { CreateStadiumTimeDto } from './dto/create-stadium_time.dto';
import { UpdateStadiumTimeDto } from './dto/update-stadium_time.dto';

@Injectable()
export class StadiumTimeService {
  constructor(
    @InjectModel(StadiumTime) private stadiumTimesRepo: typeof StadiumTime,
  ) {}

  async createStadiumTime(createStadiumTimeDto: CreateStadiumTimeDto) {
    const newStadiumTime = await this.stadiumTimesRepo.create(
      createStadiumTimeDto,
    );
    return newStadiumTime;
  }

  async getAllStadiumTimes() {
    const result = await this.stadiumTimesRepo.findAll({
      include: { all: true },
    });
    return result;
  }

  async getStadiumTimeById(id: number) {
    const result = await this.stadiumTimesRepo.findByPk(id);
    return result;
  }

  async updateStadiumTime(
    id: number,
    updateStadiumTimeDto: UpdateStadiumTimeDto,
  ) {
    const result = await this.stadiumTimesRepo.update(updateStadiumTimeDto, {
      where: { id },
    });
    return result;
  }

  async deleteStadiumTime(id: number): Promise<number> {
    const result = await this.stadiumTimesRepo.destroy({ where: { id } });
    return result;
  }
}
