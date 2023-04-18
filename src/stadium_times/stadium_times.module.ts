import { Module } from '@nestjs/common';
import { StadiumTimeController } from './stadium_times.controller';
import { StadiumTimeService } from './stadium_times.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { StadiumTime } from './models/stadium_time.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([StadiumTime]), JwtModule],
  controllers: [StadiumTimeController],
  providers: [StadiumTimeService],
})
export class StadiumTimeModule {}
