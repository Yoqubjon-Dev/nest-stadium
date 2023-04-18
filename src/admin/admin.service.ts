import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Admin } from './models/admin.model';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

@Injectable()
export class AdminService {
  constructor(@InjectModel(Admin) private adminRepo: typeof Admin) {}

  async createAdmin(createAdminDto: CreateAdminDto) {
    const newAdmin = await this.adminRepo.create(createAdminDto);
    return newAdmin;
  }

  async getAllAdmins() {
    const result = await this.adminRepo.findAll({ include: { all: true } });
    return result;
  }

  async getAdminById(id: number) {
    const result = await this.adminRepo.findByPk(id);
    return result;
  }

  async updateAdmin(id: number, updateAdminDto: UpdateAdminDto) {
    const result = await this.adminRepo.update(updateAdminDto, {
      where: { id },
    });
    return result;
  }

  async deleteAdmin(id: number): Promise<number> {
    const result = await this.adminRepo.destroy({ where: { id } });
    return result;
  }
}
