import { ApiProperty } from '@nestjs/swagger';

export class UpdateOrderDto {
  @ApiProperty({ example: '1' })
  readonly user_id?: number;

  @ApiProperty({ example: '1' })
  readonly user_wallet_id?: number;

  @ApiProperty({ example: '1' })
  readonly st_times_id?: number;

  @ApiProperty({ example: '2023-01-14T8:00' })
  readonly date?: Date;

  @ApiProperty({ example: '1' })
  readonly status_id?: number;
}
