import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Stadium } from '../../stadium/models/stadium.model';
import { User } from '../../users/models/user.model';

interface CommentAttr {
  user_id: number;
  stadium_id: number;
  impression: string;
}

@Table({ tableName: 'comment' })
export class Comment extends Model<Comment, CommentAttr> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING })
  impression: string;

  // USER
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  user_id: number;
  @BelongsTo(() => User)
  user: User[];

  // STADIUM
  @ForeignKey(() => Stadium)
  @Column({ type: DataType.INTEGER })
  stadium_id: number;
  @BelongsTo(() => Stadium)
  stadium: Stadium[];
}
