import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { User } from './models/user.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ActivateUserDto } from './dto/activate-user.dto';
import { PhoneUserDto } from './dto/phone-user.dto';
import * as otpGenerator from 'otp-generator';
import { BotService } from '../bot/bot.service';
import { Otp } from '../otp/models/otp.model';
import { Op } from 'sequelize';
import { v4 as uuidv4, v4 } from 'uuid';
import { JwtService } from '@nestjs/jwt';
import { MailService } from '../mail/mail.service';
import { AddMinutesToDate } from '../helpers/addMinutes';
import { dates, decode, encode } from '../helpers/crypto';
import { VerifyOtpDto } from './dto/verifyOtp.dto';
import { FindUserDto } from './dto/find-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userRepo: typeof User,
    @InjectModel(Otp) private otpRepo: typeof Otp,
    private readonly botService: BotService,
  ) {}

  async createUser(createUserDto: CreateUserDto, hashed_password: string) {
    const newUser = await this.userRepo.create({
      ...createUserDto,
      hashed_password,
    });
    return newUser;
  }

  async getAllUsers() {
    const users = await this.userRepo.findAll({ include: { all: true } });
    return users;
  }

  async findAll(findUserDto: FindUserDto) {
    let where = {};
    for (let i in findUserDto) {
      if (findUserDto[i] && i != 'birthday_start' && i != 'birthday_end') {
        where[i] = {
          [Op.like]: `%${findUserDto[i]}%`,
        };
      }
    }

    if (findUserDto.birthday_start && !findUserDto.birthday_end) {
      where['birthday'] = { [Op.gte]: findUserDto.birthday_start };
    }
    if (!findUserDto.birthday_start && findUserDto.birthday_end) {
      where['birthday'] = { [Op.lt]: findUserDto.birthday_start };
    }
    if (findUserDto.birthday_start && findUserDto.birthday_end) {
      where['birthday'] = {
        [Op.between]: [findUserDto.birthday_start, findUserDto.birthday_end],
      };
    }
    const users = await this.userRepo.findAll({
      where: {
        ...where,
      },
    });

    return users;
  }

  async getUserByEmail(email: string) {
    const user = await this.userRepo.findOne({
      where: { email },
      include: { all: true },
    });
    return user;
  }

  async getUserByUsername(username: string) {
    const user = await this.userRepo.findOne({
      where: { username },
      include: { all: true },
    });
    return user;
  }

  async getUserById(id: number) {
    const user = await this.userRepo.findByPk(id);
    return user;
  }

  async updateUser(id: number, updatedUser: UpdateUserDto) {
    const user = await this.userRepo.update(updatedUser, {
      where: { id },
      returning: true,
    });
    return user;
  }

  async deleteUser(id: number): Promise<number> {
    const result = await this.userRepo.destroy({ where: { id } });
    return result;
  }

  async activate(link: string) {
    if (!link) {
      throw new BadRequestException('Activation link is expired');
    }
    const updatedUser = await this.userRepo.update(
      { is_active: true },
      { where: { activation_link: link, is_active: false }, returning: true },
    );

    if (!updatedUser[1][0]) {
      throw new BadRequestException('User already activated');
    }

    const response = {
      message: 'User activated successfully',
      user: updatedUser,
    };
    return response;
  }

  async deactivate(activateUserDto: ActivateUserDto) {
    const user = await this.userRepo.findByPk(activateUserDto.userId);
    if (!user) {
      throw new HttpException('Foydalanuvchi  topilmadi', HttpStatus.NOT_FOUND);
    }
    user.is_active = false;
    await user.save();
    return user;
  }

  async newOTP(phoneUserDto: PhoneUserDto) {
    const phone_number = phoneUserDto.phone;
    const otp = otpGenerator.generate(4, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
    const isSend = await this.botService.sendOTP(phone_number, otp);
    if (!isSend) {
      throw new HttpException(
        "Avval Botdan ro'yhatdan o'ting",
        HttpStatus.BAD_REQUEST,
      );
    }
    const now = new Date();
    const expiration_time = AddMinutesToDate(now, 5);
    await this.otpRepo.destroy({
      where: { [Op.and]: [{ check: phone_number }, { verified: false }] },
    });
    const newOtp = await this.otpRepo.create({
      id: v4(),
      otp,
      expiration_time,
      check: phone_number,
    });
    const details = {
      timestamp: now,
      check: phone_number,
      success: true,
      message: 'OTP sent to user',
      otp_id: newOtp.id,
    };
    const encoded = await encode(JSON.stringify(details));
    return { status: 'Success', Details: encoded };
  }

  async verifyOtp(verifyOtpDto: VerifyOtpDto) {
    const { verification_key, otp, check } = verifyOtpDto;
    const currentdate = new Date();
    const decoded = await decode(verification_key);
    const obj = JSON.parse(decoded);
    const check_obj = obj.check;
    if (check_obj != check)
      throw new BadRequestException('OTP bu raqamga yuborilmagan');
    const result = await this.otpRepo.findOne({ where: { id: obj.otp_id } });
    if (result != null) {
      if (!result.verified) {
        if (dates.compare(result.expiration_time, currentdate)) {
          if (otp === result.otp) {
            const user = await this.userRepo.findOne({
              where: { phone: check },
            });
            if (user) {
              const updatedUser = await this.userRepo.update(
                { is_owner: true },
                { where: { id: user.id }, returning: true },
              );
              await this.otpRepo.update(
                { verified: true },
                { where: { id: obj.otp_id }, returning: true },
              );
              const response = {
                message: 'User updated as owner',
                user: updatedUser[1][0],
              };
              return response;
            }
          } else {
            throw new BadRequestException('Otp is not match');
          }
        } else {
          throw new BadRequestException('Otp expired');
        }
      } else {
        throw new BadRequestException('Otp already used');
      }
    } else {
      throw new BadRequestException('Bunday foydalanuvchi yo`q');
    }
  }
}
