import { Module } from '@nestjs/common';
import { UserWalletController } from './user_wallet.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserWallet } from './models/user_wallet.model';
import { UsersWalletService } from './user_wallet.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([UserWallet]), JwtModule],
  controllers: [UserWalletController],
  providers: [UsersWalletService],
})
export class UserWalletModule {}
