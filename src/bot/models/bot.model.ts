import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface BotAttr {
  user_id: number;
  username: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  status: boolean;
}

@Table({ tableName: 'bot' })
export class Bot extends Model<Bot, BotAttr> {
  @ApiProperty({ example: 12348472 })
  @Column({ type: DataType.INTEGER, primaryKey: true, allowNull: false })
  user_id: number;

  @ApiProperty({ example: 'UserName' })
  @Column({ type: DataType.STRING })
  username: string;

  @ApiProperty({ example: 'Toshmat' })
  @Column({ type: DataType.STRING })
  first_name: string;

  @ApiProperty({ example: 'Eshmat' })
  @Column({ type: DataType.STRING })
  last_name: string;

  @ApiProperty({ example: '+9987038006' })
  @Column({ type: DataType.STRING })
  phone_number: string;

  @ApiProperty({ example: 'true/false' })
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  status: boolean;
}
