import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ActivateUserDto } from './dto/activate-user.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { User } from './models/user.model';
import { CookieGetter } from '../decorators/cookieGetter.decorator';
import { PhoneUserDto } from './dto/phone-user.dto';
import { VerifyOtpDto } from './dto/verifyOtp.dto';
import { FindUserDto } from './dto/find-user.dto';
import { JwtAuthGuard } from '../guards/jwt-auth.guards';
import { AdminAuthGuard } from '../guards/admin-auth.guards';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'Create a user' })
  @UseGuards(JwtAuthGuard)
  @UseGuards(AdminAuthGuard)
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto, createUserDto.password);
  }

  @ApiOperation({ summary: 'Get all users' })
  @UseGuards(JwtAuthGuard)
  @Get()
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @ApiOperation({ summary: 'Find all users' })
  @UseGuards(JwtAuthGuard)
  @Post('find')
  findAll(@Body() findUserDto: FindUserDto) {
    return this.usersService.findAll(findUserDto);
  }

  @ApiOperation({ summary: 'Get user by ID' })
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getUserById(@Param('id') id: number) {
    return this.usersService.getUserById(+id);
  }

  @ApiOperation({ summary: 'Update user by ID' })
  @UseGuards(JwtAuthGuard)
  @UseGuards(AdminAuthGuard)
  @Put(':id')
  async updateUser(@Param('id') id: number, @Body() userData: UpdateUserDto) {
    return await this.usersService.updateUser(+id, userData);
  }

  @ApiOperation({ summary: 'Delete user by ID' })
  @UseGuards(JwtAuthGuard)
  @UseGuards(AdminAuthGuard)
  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<number> {
    return await this.usersService.deleteUser(id);
  }

  @ApiOperation({ summary: 'Otp phone' })
  @UseGuards(JwtAuthGuard)
  @Post('otp')
  async newOtp(@Body() phoneUserDto: PhoneUserDto) {
    return await this.usersService.newOTP(phoneUserDto);
  }

  @ApiOperation({ summary: 'Otp phone' })
  @Post('verify')
  async verifyOtp(@Body() verifyOtpDto: VerifyOtpDto) {
    return await this.usersService.verifyOtp(verifyOtpDto);
  }

  @ApiOperation({ summary: 'Activate User' })
  @ApiResponse({ status: 200, type: [User] })
  @Get('activate/:link')
  activate(@Param('link') link: string) {
    console.log(link);
    return this.usersService.activate(link);
  }
}
