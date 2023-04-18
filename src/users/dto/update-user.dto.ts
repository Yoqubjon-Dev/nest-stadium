import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({ example: 'Toshmat' })
  readonly first_name?: string;

  @ApiProperty({ example: 'Hoshimov' })
  readonly last_name?: string;

  @ApiProperty({ example: 'HoshimTosh' })
  readonly username?: string;

  @ApiProperty({ example: 'Uzb@k!$t0n' })
  readonly hashed_password?: string;

  @ApiProperty({ example: '@Toshbek' })
  readonly telegram_link?: string;

  @ApiProperty({ example: 'tosh@gmail.com' })
  readonly email?: string;

  @ApiProperty({ example: '+998887028030' })
  readonly phone?: string;

  @ApiProperty({ example: '2137919738941.jpg' })
  readonly user_photo?: string;

  @ApiProperty({ example: '2023-03-14' })
  readonly birthday?: string;

  @ApiProperty({ example: 'Token' })
  readonly hashed_refresh_token?: string;

  @ApiProperty({ example: 'Link Activation' })
  readonly activation_link?: string;
}
