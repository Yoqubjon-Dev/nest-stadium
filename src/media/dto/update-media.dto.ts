import { ApiProperty } from '@nestjs/swagger';

export class UpdateMediaDto {
  @ApiProperty({ example: '2' })
  readonly stadium_id?: number;

  @ApiProperty({ example: 'img1.jpg' })
  readonly photo?: string;

  @ApiProperty({ example: 'Lorem ipsum dolar set asd gloaskn adl' })
  readonly description?: string;
}
