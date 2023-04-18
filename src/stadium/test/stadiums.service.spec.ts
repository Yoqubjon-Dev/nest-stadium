// import { JwtService } from '@nestjs/jwt';
// import { getModelToken } from '@nestjs/sequelize';
// import { TestingModule, Test } from '@nestjs/testing';
// import { BotService } from '../../bot/bot.service';
// import { Bot } from '../../bot/models/bot.model';
// import { CreateUserDto } from '../dto/create-user.dto';
// import { User } from '../models/user.model';
// import { UsersService } from '../users.service';
// import { userStub } from './stubs/user.stub';
// import * as bcrypt from 'bcrypt';

// describe('Users service', () => {
//   let usersService: UsersService;

//   const mockUsersRepository = {
//     create: jest.fn().mockImplementation(userStub),
//     findOne: jest.fn().mockImplementation(userStub),
//     findByPk: jest.fn().mockImplementation(userStub),
//     findAll: jest.fn().mockImplementation(() => [userStub()]),
//     destroy: jest.fn().mockImplementation(() => 1),
//   };
//   const mockOtpRepository = {
//     create: jest.fn().mockImplementation(userStub),
//     findOne: jest.fn().mockImplementation(userStub),
//     destroy: jest.fn().mockImplementation(userStub),
//   };
//   const mockBotRepository = {
//     sendOtp: jest.fn().mockImplementation(() => true),
//   };

//   beforeEach(async () => {
//     const moduleRef: TestingModule = await Test.createTestingModule({
//       imports: [],
//       providers: [
//         UsersService,
//         JwtService,
//         BotService,
//         { provide: getModelToken(User), useValue: mockUsersRepository },
//         { provide: getModelToken(Bot), useValue: mockBotRepository },
//       ],
//     }).compile();

//     usersService = moduleRef.get<UsersService>(UsersService);
//   });
//   console.log(usersService);

//   it('should be defined', () => {
//     expect(usersService).toBeDefined();
//   });

//   describe('Create User', () => {
//     describe('When createUser is called', () => {
//       let createUserDto: CreateUserDto;
//       let newUser: User;
//       let hashedPassword: string;
//       beforeEach(async () => {
//         createUserDto = {
//           first_name: userStub().first_name,
//           last_name: userStub().last_name,
//           username: userStub().username,
//           password: userStub().hashed_password,
//           confirm_password: userStub().hashed_password,
//           telegram_link: userStub().telegram_link,
//           email: userStub().email,
//           phone: userStub().phone,
//           birthday: userStub().birthday,
//         };
//         hashedPassword = await bcrypt.hash(createUserDto.password, 7);
//         newUser = await usersService.createUser(createUserDto, hashedPassword);
//         console.log(newUser);
//       });

//       it('should be create new user', async () => {
//         expect(
//           await usersService.createUser(createUserDto, hashedPassword),
//         ).toEqual({ ...userStub() });
//       });
//     });
//   });

//   describe('getOneUser', () => {
//     describe('when getOneUser is called', () => {
//       test('then it should call userService', async () => {
//         expect(await usersService.getUserById(userStub().id)).toEqual(
//           userStub(),
//         );
//       });
//     });
//   });

//   describe('getAllUsers', () => {
//     describe('when getAllUsers is called', () => {
//       test('then it should call usersService', async () => {
//         expect(await usersService.getAllUsers()).toEqual([userStub()]);
//       });
//     });
//   });

//   describe('deleteUser', () => {
//     describe('when deleteUser is called', () => {
//       test('then it should call usersService', async () => {
//         expect(await usersService.deleteUser(userStub().id)).toEqual(1);
//       });
//     });
//   });
// });
