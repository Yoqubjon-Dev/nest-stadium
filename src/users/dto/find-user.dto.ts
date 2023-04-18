export class FindUserDto {
  readonly first_name?: string;
  readonly last_name?: string;
  readonly username?: string;
  readonly password?: string;
  readonly confirm_password?: string;
  readonly telegram_link?: string;
  readonly email?: string;
  readonly phone?: string;
  readonly birthday_start?: Date;
  readonly birthday_end?: Date;
}
