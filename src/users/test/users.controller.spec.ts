import { describe } from 'node:test';
import { UsersController } from '../users.controller';
import { UsersService } from '../users.service';
import { JwtService } from '@nestjs/jwt';
import { Test } from '@nestjs/testing';
import { User } from '../models/user.model';
import { CreateUserDto } from '../dto/create-user.dto';
import { userStub } from './stubs/user.stub';

jest.mock('../users.service');
describe('Users controller', () => {
  let usersController: UsersController;
  let usersService: UsersService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      // imports:[AppModule]
      controllers: [UsersController],
      providers: [UsersService, JwtService],
    }).compile();

    usersController = moduleRef.get<UsersController>(UsersController);
    usersService = moduleRef.get<UsersService>(UsersService);
    jest.clearAllMocks();
  });

  it('should be defined userController', () => {
    expect(usersController).toBeDefined();
  });

  it('should be defined userService', () => {
    expect(usersService).toBeDefined();
  });

  describe('Create User', () => {
    describe('When createUser is called', () => {
      let user: User;
      let createUserDto: CreateUserDto;

      beforeEach(async () => {
        createUserDto = {
          first_name: userStub().first_name,
          last_name: userStub().last_name,
          username: userStub().username,
          password: userStub().hashed_password,
          confirm_password: userStub().hashed_password,
          telegram_link: userStub().telegram_link,
          email: userStub().email,
          phone: userStub().phone,
          birthday: userStub().birthday,
        };
        user = await usersController.createUser(createUserDto);
      });

      // it('then it should call usersService', () => {
      //   expect(usersService.createUser).toHaveBeenCalledWith(createUserDto);
      // });

      it('then it should be return user', () => {
        expect(user).toEqual(userStub());
      });
    });
  });

  describe('getOneUser', () => {
    describe('When createUser is called', () => {
      let user: User;

      beforeEach(async () => {
        user = await usersController.getUserById(userStub().id);
      });

      it('then it should call usersService', () => {
        expect(usersService.getUserById).toBeCalledWith(userStub().id);
      });

      it('then it should return user', () => {
        expect(user).toEqual(userStub());
      });
    });
  });

  describe('getOneUser', () => {
    describe('When createUser is called', () => {
      let users: User[];

      beforeEach(async () => {
        users = await usersController.getAllUsers();
      });

      test('then it should call userService', () => {
        expect(usersService.getAllUsers).toBeCalledWith();
      });

      test('then it should return user', () => {
        expect(users).toEqual([userStub()]);
      });
    });
  });

  describe('DeleteOneUser', () => {
    describe('When deleteUser is called', () => {
      let res: Object;

      beforeEach(async () => {
        res = await usersController.deleteUser(userStub().id);
        console.log(res);
      });

      test('then it should call userService', () => {
        expect(usersService.deleteUser).toBeCalledWith(userStub().id);
      });

      test('then it should return message', () => {
        expect(res).toEqual(1);
      });
    });
  });
});
