import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { JwtModule } from '@nestjs/jwt';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cart } from './models/cart.model';

@Module({
  imports: [SequelizeModule.forFeature([Cart]), JwtModule],
  controllers: [CartController],
  providers: [CartService],
})
export class CartModule {}
