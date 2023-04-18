import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateMediaDto {
  @ApiProperty({ example: '1' })
  @IsNotEmpty()
  readonly stadium_id: number;

  @ApiProperty({ example: 'img.jpg' })
  @IsNotEmpty()
  readonly photo: string;

  @ApiProperty({ example: 'Lorem ipsum dolar set asd gloaskn adl' })
  @IsNotEmpty()
  readonly description: string;
}
