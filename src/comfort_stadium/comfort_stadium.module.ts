import { Module } from '@nestjs/common';
import { ComfortStadiumService } from './comfort_stadium.service';
import { ComfortStadiumController } from './comfort_stadium.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ComfortStadium } from './models/comfort_stadium.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([ComfortStadium]), JwtModule],
  controllers: [ComfortStadiumController],
  providers: [ComfortStadiumService],
})
export class ComfortStadiumModule {}
