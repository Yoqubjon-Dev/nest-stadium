import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateStatusDto {
  @ApiProperty({ example: 'Band' })
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({ example: 'Odam bor edi' })
  @IsNotEmpty()
  readonly description: string;
}
