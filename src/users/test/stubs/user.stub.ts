import { User } from '../../../users/models/user.model';

export const userStub = (): Partial<User> => {
  return {
    id: 1,
    first_name: 'Toshmat',
    last_name: 'Hoshimov',
    username: 'HoshimTosh',
    hashed_password: 'Uzb@k!$t0n',
    telegram_link: '@Toshbek',
    email: 'tosh@gmail.com',
    phone: '+998887038006',
    birthday: '2023-03-14',
    is_owner: true,
    is_active: true,
  };
};
