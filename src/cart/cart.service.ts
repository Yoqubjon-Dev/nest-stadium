import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Cart } from './models/cart.model';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@Injectable()
export class CartService {
  constructor(@InjectModel(Cart) private cartRepo: typeof Cart) {}

  async createCart(createCartDto: CreateCartDto) {
    const newCart = await this.cartRepo.create(createCartDto);
    return newCart;
  }

  async getAllCarts() {
    const result = await this.cartRepo.findAll({
      include: { all: true },
    });
    return result;
  }

  async getCartById(id: number) {
    const result = await this.cartRepo.findByPk(id);
    return result;
  }

  async updateCart(id: number, updateCartDto: UpdateCartDto) {
    const result = await this.cartRepo.update(updateCartDto, {
      where: { id },
    });
    return result;
  }

  async deleteCart(id: number): Promise<number> {
    const result = await this.cartRepo.destroy({ where: { id } });
    return result;
  }
}
