import { ApiProperty } from '@nestjs/swagger';

export class UpdateComfortStadiumDto {
  @ApiProperty({ example: '1' })
  readonly stadium_id?: number;

  @ApiProperty({ example: '1' })
  readonly category_id?: number;
}
