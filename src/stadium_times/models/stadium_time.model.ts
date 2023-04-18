import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Stadium } from '../../stadium/models/stadium.model';

interface StadiumTimeAttr {
  stadium_id: number;
  start_time: string;
  end_time: string;
  price: number;
}

@Table({ tableName: 'stadium-time' })
export class StadiumTime extends Model<StadiumTime, StadiumTimeAttr> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  start_time: string;

  @Column({ type: DataType.STRING, allowNull: false })
  end_time: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  price: number;

  @ForeignKey(() => Stadium)
  @Column({ type: DataType.INTEGER })
  stadium_id: number;
  @BelongsTo(() => Stadium)
  stadium: Stadium[];
}
