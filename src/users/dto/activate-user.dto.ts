import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class ActivateUserDto {
  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  readonly userId: number;
}
