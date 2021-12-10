import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty, IsString, MinLength, MaxLength,
} from 'class-validator';

export default class SampleDto {
  constructor(body: SampleDto | null = null) {
    if (body) {
      this.qoute = body?.qoute;
    }
  }

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  readonly qoute: string = '';
}
