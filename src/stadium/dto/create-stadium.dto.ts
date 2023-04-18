import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateStadiumDto {
  @ApiProperty({ example: '1' })
  @IsNotEmpty()
  category_id: number;

  @ApiProperty({ example: '1' })
  @IsNotEmpty()
  owner_id: number;

  @ApiProperty({ example: 'Telegram' })
  @IsNotEmpty()
  contact_with: string;

  @ApiProperty({ example: 'Bunyodkor' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: '20' })
  @IsNotEmpty()
  volume: string;

  @ApiProperty({ example: 'Mirzo Ulugbek' })
  @IsNotEmpty()
  address: string;

  @ApiProperty({ example: '1' })
  @IsNotEmpty()
  region_id: number;

  @ApiProperty({ example: '1' })
  @IsNotEmpty()
  district_id: number;

  @ApiProperty({ example: '41.299496-69.240074' })
  @IsNotEmpty()
  location: string;

  @ApiProperty({ example: '1975' })
  @IsNotEmpty()
  buildAt: string;

  @ApiProperty({ example: '8:00' })
  @IsNotEmpty()
  start_time: string;

  @ApiProperty({ example: '16:00' })
  @IsNotEmpty()
  end_time: string;
}
