import { stadiumStub } from '../test/stubs/stadiums.stub';

export const StadiumService = jest.fn().mockReturnValue({
  createStadium: jest.fn().mockResolvedValue(stadiumStub()),
  getStadiumById: jest.fn().mockResolvedValue(stadiumStub()),
});
