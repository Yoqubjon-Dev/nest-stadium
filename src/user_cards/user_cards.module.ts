import { Module } from '@nestjs/common';
import { UserCardController } from './user_cards.controller';
import { UserCardService } from './user_cards.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserCard } from './models/user_card.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([UserCard]), JwtModule],
  controllers: [UserCardController],
  providers: [UserCardService],
})
export class UserCardsModule {}
