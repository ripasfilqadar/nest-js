import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { IsBoolean, IsOptional, MinLength } from 'class-validator';

import SignUpDto from '@v1/auth/dto/sign-up.dto';

export default class UpdateUserDto extends PartialType(SignUpDto) {
  @ApiPropertyOptional({
    type: Boolean,
  })
  @IsOptional()
  @IsBoolean()
  readonly verified: boolean = false;

	@MinLength(5)
	readonly name?: string = ''
}
