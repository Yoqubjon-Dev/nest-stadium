import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Order } from './models/order.model';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrderService {
  constructor(@InjectModel(Order) private orderRepo: typeof Order) {}

  async createOrder(createOrderDto: CreateOrderDto) {
    const newOrder = await this.orderRepo.create(createOrderDto);
    return newOrder;
  }

  async getAllOrders() {
    const result = await this.orderRepo.findAll({ include: { all: true } });
    return result;
  }

  async getOrderById(id: number) {
    const result = await this.orderRepo.findByPk(id);
    return result;
  }

  async updateOrder(id: number, updateOrderDto: UpdateOrderDto) {
    const result = await this.orderRepo.update(updateOrderDto, {
      where: { id },
    });
    return result;
  }

  async deleteOrder(id: number): Promise<number> {
    const result = await this.orderRepo.destroy({ where: { id } });
    return result;
  }
}
