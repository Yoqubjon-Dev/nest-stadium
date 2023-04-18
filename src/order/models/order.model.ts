import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from '../../users/models/user.model';
import { UserWallet } from '../../user_wallet/models/user_wallet.model';
import { StadiumTime } from '../../stadium_times/models/stadium_time.model';
import { Status } from '../../status/models/status.model';

interface OrderAttr {
  user_id: number;
  user_wallet_id: number;
  st_times_id: number;
  date: Date;
  createdAt: Date;
  status_id: number;
}

@Table({ tableName: 'orders' })
export class Order extends Model<Order, OrderAttr> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.DATE })
  date: Date;

  @Column({ type: DataType.DATE })
  createdAt: Date;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  user_id: number;
  @BelongsTo(() => User)
  user: User[];

  @ForeignKey(() => UserWallet)
  @Column({ type: DataType.INTEGER })
  user_wallet_id: number;
  @BelongsTo(() => UserWallet)
  userWallet: UserWallet[];

  @ForeignKey(() => StadiumTime)
  @Column({ type: DataType.INTEGER })
  st_times_id: number;
  @BelongsTo(() => StadiumTime)
  stadiumTimes: StadiumTime[];

  @ForeignKey(() => Status)
  @Column({ type: DataType.INTEGER })
  status_id: number;
  @BelongsTo(() => Status)
  status: Status[];
}
