import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Otp } from './models/otp.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([Otp]), JwtModule],
  controllers: [],
  providers: [],
})
export class OtpModule {}
