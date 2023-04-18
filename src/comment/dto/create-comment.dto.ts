import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateCommentDto {
  @ApiProperty({ example: '1' })
  @IsNotEmpty()
  readonly user_id: number;

  @ApiProperty({ example: '1' })
  @IsNotEmpty()
  readonly stadium_id: number;

  @ApiProperty({ example: '1' })
  @IsNotEmpty()
  readonly impression: string;
}
