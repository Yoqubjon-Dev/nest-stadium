import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateStadiumTimeDto {
  @ApiProperty({ example: '1' })
  @IsNotEmpty()
  readonly stadium_id: number;

  @ApiProperty({ example: '8:00' })
  @IsNotEmpty()
  readonly start_time: string;

  @ApiProperty({ example: '17:00' })
  @IsNotEmpty()
  readonly end_time: string;

  @ApiProperty({ example: '12000' })
  @IsNotEmpty()
  readonly price: number;
}
