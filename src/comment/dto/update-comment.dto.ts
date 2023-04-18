import { ApiProperty } from '@nestjs/swagger';

export class UpdateCommentDto {
  @ApiProperty({ example: '1' })
  readonly user_id?: number;

  @ApiProperty({ example: '1' })
  readonly stadium_id?: number;

  @ApiProperty({ example: '1' })
  readonly impression?: string;
}
