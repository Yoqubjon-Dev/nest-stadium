import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';

interface OtpAttr {
  id: string;
  otp: string;
  expiration_time: Date;
  verified: boolean;
  check: string;
}

@Table({ tableName: 'otp' })
export class Otp extends Model<Otp, OtpAttr> {
  @Column({ type: DataType.UUID, autoIncrement: false, primaryKey: true})
  id: string;

  @ApiProperty({ example: '1909' })
  @Column({ type: DataType.STRING, allowNull: false })
  otp: string;

  @ApiProperty({ example: '2023-02-27T08:10:10.000Z' })
  @Column({ type: DataType.DATE, allowNull: false })
  expiration_time: Date;

  @ApiProperty({ example: 'false' })
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  verified: boolean;

  @ApiProperty({ example: '9981234238' })
  @Column({ type: DataType.STRING, allowNull: false })
  check: string;
}
