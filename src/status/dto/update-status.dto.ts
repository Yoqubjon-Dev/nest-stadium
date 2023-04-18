import { ApiProperty } from '@nestjs/swagger';

export class UpdateStatusDto {
  @ApiProperty({ example: 'Band' })
  readonly name?: string;

  @ApiProperty({ example: 'Odam bor edi' })
  readonly description?: string;
}
