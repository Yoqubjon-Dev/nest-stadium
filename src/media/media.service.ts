import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Media } from './models/media.model';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';

@Injectable()
export class MediaService {
  constructor(@InjectModel(Media) private mediaRepo: typeof Media) {}

  async createMedia(createMediaDto: CreateMediaDto) {
    const newMedia = await this.mediaRepo.create(createMediaDto);
    return newMedia;
  }

  async getAllMedias() {
    const result = await this.mediaRepo.findAll({
      include: { all: true },
    });
    return result;
  }

  async getMediaById(id: number) {
    const result = await this.mediaRepo.findByPk(id);
    return result;
  }

  async updateMedia(id: number, updateMediaDto: UpdateMediaDto) {
    const result = await this.mediaRepo.update(updateMediaDto, {
      where: { id },
    });
    return result;
  }

  async deleteMedia(id: number): Promise<number> {
    const result = await this.mediaRepo.destroy({ where: { id } });
    return result;
  }
}
