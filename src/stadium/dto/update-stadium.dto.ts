import { ApiProperty } from '@nestjs/swagger';

export class UpdateStadiumDto {
  @ApiProperty({ example: '1' })
  readonly category_id: number;

  @ApiProperty({ example: '1' })
  readonly owner_id: number;

  @ApiProperty({ example: 'Telegram' })
  readonly contact_with: string;

  @ApiProperty({ example: 'Bunyodkor' })
  readonly name: string;

  @ApiProperty({ example: '20' })
  readonly volume: string;

  @ApiProperty({ example: 'Mirzo Ulugbek' })
  readonly address: string;

  @ApiProperty({ example: '1' })
  readonly region_id: number;

  @ApiProperty({ example: '1' })
  readonly district_id: number;

  @ApiProperty({ example: '41.299496-69.240074' })
  readonly location: string;

  @ApiProperty({ example: '1975' })
  readonly buildAt: string;

  @ApiProperty({ example: '8:00' })
  readonly start_time: string;

  @ApiProperty({ example: '16:00' })
  readonly end_time: string;
}
