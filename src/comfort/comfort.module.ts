import { Module } from '@nestjs/common';
import { ComfortService } from './comfort.service';
import { ComfortController } from './comfort.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Comfort } from './models/comfort.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([Comfort]), JwtModule],
  controllers: [ComfortController],
  providers: [ComfortService],
})
export class ComfortModule {}
