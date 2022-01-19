import {
  IsNotEmpty,
  MinLength,
  IsString,
  IsEmail,
  MaxLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export default class SignUpDto {
  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @MinLength(3)
  @MaxLength(128)
  readonly email: string = '';

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(64)
  readonly password: string = '';

	@ApiProperty({ type: String })
	@IsNotEmpty()
	@IsString()
	@MinLength(5)
	@MaxLength(100)
	readonly name: string = ''

	@ApiProperty({ type: String })
	@IsNotEmpty()
	@IsString()
	@MaxLength(20)
	readonly phoneNumber: string = ''
}
