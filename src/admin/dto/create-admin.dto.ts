import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateAdminDto {
  @ApiProperty({ example: 'adminjon' })
  @IsNotEmpty()
  username: string;

  @ApiProperty({ example: 'admin@gmail.com' })
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: '@admin' })
  @IsNotEmpty()
  telegram_link: string;

  @ApiProperty({ example: 'admin.jpg' })
  @IsNotEmpty()
  admin_photo: string;
}
