import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { JwtAuthGuard } from '../guards/jwt-auth.guards';
import { AdminAuthGuard } from '../guards/admin-auth.guards';

@ApiTags('Cart')
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @ApiOperation({ summary: 'Create a Cart' })
  @UseGuards(JwtAuthGuard)
  @UseGuards(AdminAuthGuard)
  @Post()
  createCart(@Body() createCartDto: CreateCartDto) {
    return this.cartService.createCart(createCartDto);
  }

  @ApiOperation({ summary: 'Get all Cart' })
  @UseGuards(JwtAuthGuard)
  @Get()
  getAllCarts() {
    return this.cartService.getAllCarts();
  }

  @ApiOperation({ summary: 'Get Cart' })
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getCartById(@Param('id') id: number) {
    return this.cartService.getCartById(+id);
  }

  @ApiOperation({ summary: 'Update Cart' })
  @UseGuards(JwtAuthGuard)
  @UseGuards(AdminAuthGuard)
  @Put(':id')
  async updateCart(
    @Param('id') id: number,
    @Body() updateCartDto: UpdateCartDto,
  ) {
    return await this.cartService.updateCart(+id, updateCartDto);
  }

  @ApiOperation({ summary: 'Delete user' })
  @UseGuards(JwtAuthGuard)
  @UseGuards(AdminAuthGuard)
  @Delete(':id')
  async deleteCart(@Param('id') id: number): Promise<number> {
    return await this.cartService.deleteCart(id);
  }
}
