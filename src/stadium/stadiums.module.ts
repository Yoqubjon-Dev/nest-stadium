import { Module } from '@nestjs/common';
import { StadiumController } from './stadiums.controller';
import { StadiumService } from './stadiums.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Stadium } from './models/stadium.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([Stadium]), JwtModule],
  controllers: [StadiumController],
  providers: [StadiumService],
})
export class StadiumsModule {}
