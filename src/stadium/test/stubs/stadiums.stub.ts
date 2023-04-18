import { Stadium } from '../../models/stadium.model';

export const stadiumStub = (): Partial<Stadium> => {
  return {
    id: 1,
    category_id: 1,
    owner_id: 1,
    contact_with: '+998887038006',
    name: 'Bunyodakor',
    volume: '20',
    address: 'Mirzo Ulugbek',
    region_id: 1,
    district_id: 1,
    location: '41.299496-69.240074',
    buildAt: '1975-01-12',
    start_time: '8:00',
    end_time: '17:00',
  };
};
