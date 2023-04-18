import { Module } from '@nestjs/common';
import { CategoryService } from './categories.service';
import { Category } from './models/category.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { CategoryController } from './categories.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([Category]), JwtModule],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoriesModule {}
