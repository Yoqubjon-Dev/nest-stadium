import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty({ example: '1' })
  @IsNotEmpty()
  readonly user_id: number;

  @ApiProperty({ example: '1' })
  @IsNotEmpty()
  readonly user_wallet_id: number;

  @ApiProperty({ example: '1' })
  @IsNotEmpty()
  readonly st_times_id: number;

  @ApiProperty({ example: '2023-01-14T8:00' })
  @IsNotEmpty()
  readonly date: Date;

  @ApiProperty({ example: '1' })
  @IsNotEmpty()
  readonly status_id: number;
}
