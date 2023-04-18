import { ApiProperty } from '@nestjs/swagger';

export class UpdateStadiumTimeDto {
  @ApiProperty({ example: '1' })
  readonly stadium_id: number;

  @ApiProperty({ example: '8:00' })
  readonly start_time: string;

  @ApiProperty({ example: '17:00' })
  readonly end_time: string;

  @ApiProperty({ example: '12000' })
  readonly price: number;
}
