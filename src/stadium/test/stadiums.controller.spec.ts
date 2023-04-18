import { JwtService } from '@nestjs/jwt';
import { Test } from '@nestjs/testing';
import { StadiumController } from '../stadiums.controller';
import { StadiumService } from '../stadiums.service';
import { Stadium } from '../models/stadium.model';
import { stadiumStub } from './stubs/stadiums.stub';
import { CreateStadiumDto } from '../dto/create-stadium.dto';

jest.mock('../stadiums.service');
describe('Stadiums controller', () => {
  let stadiumController: StadiumController;
  let stadiumService: StadiumService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      // imports:[AppModule],
      controllers: [StadiumController],
      providers: [StadiumService, JwtService],
    }).compile();

    stadiumController = moduleRef.get<StadiumController>(StadiumController);
    stadiumService = moduleRef.get<StadiumService>(StadiumService);
    jest.clearAllMocks();
  });

  test('should be defined StadiumController', () => {
    expect(stadiumController).toBeDefined();
  });

  it('should be defined StadiumService', () => {
    expect(stadiumService).toBeDefined();
  });

  describe('Create Stadium', () => {
    describe('When createStadium is called', () => {
      let stadium: Stadium;
      let createStadiumDto: CreateStadiumDto;

      beforeAll(async () => {
        createStadiumDto = {
          category_id: stadiumStub().category_id,
          owner_id: stadiumStub().owner_id,
          contact_with: stadiumStub().contact_with,
          name: stadiumStub().name,
          volume: stadiumStub().volume,
          address: stadiumStub().address,
          region_id: stadiumStub().region_id,
          district_id: stadiumStub().district_id,
          location: stadiumStub().location,
          buildAt: stadiumStub().buildAt,
          start_time: stadiumStub().start_time,
          end_time: stadiumStub().end_time,
        };
        stadium = await stadiumController.createStadium(createStadiumDto);
      });
      console.log(stadiumStub(), stadium);

      it('then it should be return stadium', () => {
        expect(stadium).toEqual(stadiumStub());
      });
    });
  });

  // describe('getOneStadium', () => {
  //   describe('When createStadium is called', () => {
  //     let stadium: Stadium;

  //     beforeEach(async () => {
  //       stadium = await stadiumController.getStadiumById(stadiumStub().id);
  //     });

  //     it('then it should call stadiumService', () => {
  //       expect(stadiumService.getStadiumById).toBeCalledWith(stadiumStub().id);
  //     });

  //     it('then it should return stadium', () => {
  //       expect(stadium).toEqual(stadiumStub());
  //     });
  //   });
  // });

  // describe('getOneStadium', () => {
  //   describe('When createStadium is called', () => {
  //     let stadiums: Stadium[];

  //     beforeEach(async () => {
  //       stadiums = await stadiumController.getAllStadiums();
  //     });

  //     test('then it should call StadiumService', () => {
  //       expect(stadiumService.getAllStadiums).toBeCalledWith();
  //     });

  //     test('then it should return stadium', () => {
  //       expect(stadiums).toEqual([stadiumStub()]);
  //     });
  //   });
  // });

  // describe('DeleteOneStadium', () => {
  //   describe('When deleteStadium is called', () => {
  //     let res: Object;

  //     beforeEach(async () => {
  //       res = await stadiumController.deleteStadium(stadiumStub().id);
  //       console.log(res);
  //     });

  //     test('then it should call StadiumService', () => {
  //       expect(stadiumService.deleteStadium).toBeCalledWith(stadiumStub().id);
  //     });

  //     test('then it should return message', () => {
  //       expect(res).toEqual(1);
  //     });
  //   });
  // });
});
