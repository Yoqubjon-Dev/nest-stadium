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
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { UsersWalletService } from './user_wallet.service';
import { CreateUserWalletDto } from './dto/create-user_wallet.dto';
import { UpdateUserWalletDto } from './dto/update-user_wallet.dto';
import { JwtAuthGuard } from '../guards/jwt-auth.guards';
import { AdminAuthGuard } from '../guards/admin-auth.guards';

@ApiTags('User Wallet')
@Controller('user-wallet')
export class UserWalletController {
  constructor(private readonly userWalletService: UsersWalletService) {}

  @ApiOperation({ summary: 'Create a User wallet' })
  @UseGuards(JwtAuthGuard)
  @UseGuards(AdminAuthGuard)
  @Post()
  createUserWallet(@Body() createUserWalletDto: CreateUserWalletDto) {
    return this.userWalletService.createUserWallet(createUserWalletDto);
  }

  @ApiOperation({ summary: 'Get all User wallet' })
  @UseGuards(JwtAuthGuard)
  @Get()
  getAllUserWallets() {
    return this.userWalletService.getAllUserWallets();
  }

  @ApiOperation({ summary: 'Get User wallet' })
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getUserWalletById(@Param('id') id: number) {
    return this.userWalletService.getUserWalletById(+id);
  }

  @ApiOperation({ summary: 'Update User wallet' })
  @UseGuards(JwtAuthGuard)
  @UseGuards(AdminAuthGuard)
  @Put(':id')
  async updateUserWallet(
    @Param('id') id: number,
    @Body() updateUserWalletDto: UpdateUserWalletDto,
  ) {
    return await this.userWalletService.updateUserWallet(
      +id,
      updateUserWalletDto,
    );
  }

  @ApiOperation({ summary: 'Delete User wallet' })
  @UseGuards(JwtAuthGuard)
  @UseGuards(AdminAuthGuard)
  @Delete(':id')
  async deleteUserWallet(@Param('id') id: number): Promise<number> {
    return await this.userWalletService.deleteUserWallet(id);
  }
}
