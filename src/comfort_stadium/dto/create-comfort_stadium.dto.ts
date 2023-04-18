import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateComfortStadiumDto {
  @ApiProperty({ example: '1' })
  @IsNotEmpty()
  readonly stadium_id: number;

  @ApiProperty({ example: '1' })
  @IsNotEmpty()
  readonly category_id: number;
}
