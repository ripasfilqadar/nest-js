/*
https://docs.nestjs.com/controllers#controllers
*/

import JwtAccessGuard from '@guards/jwt-access.guard';
import {
  Body, Controller, Get, HttpCode, HttpStatus, Param, Patch, Post, UseGuards,
} from '@nestjs/common';
import {
  ApiBadRequestResponse, ApiBearerAuth, ApiBody, ApiOkResponse, ApiParam, ApiTags,
} from '@nestjs/swagger';
import SampleDto from './dto/sample.dto';
import SampleRepository from './sample.repository';
import { SampleService } from './sample.service';

@ApiTags('Samples')
@UseGuards(JwtAccessGuard)
@ApiBearerAuth()
@Controller('samples')
export default class SamplesController {
  constructor(
      private readonly sampleService: SampleService,
      private readonly sampleRepository: SampleRepository,
  ) {
  }

  @Get()
  getAllSample() {
    return this.sampleRepository.getAllSample();
  }

  @UseGuards(JwtAccessGuard)
  @HttpCode(HttpStatus.CREATED)
  @ApiBadRequestResponse({
    schema: {
      type: 'object',
      example: {
        message: [],
        error: 'Bad Request',
      },
    },
    description: '400. ValidationException',
  })
  @ApiBody({ type: SampleDto })
  @ApiOkResponse({
    description: '201, Success',
  })
  @Post()
  addSample(@Body() sample: SampleDto) {
    return this.sampleRepository.addSample(sample);
  }

  @ApiBody({ type: SampleDto })
  @ApiOkResponse({
    description: '200, Success',
  })
  @ApiParam({ name: 'id', type: Number })
  @Patch(':id')
  updateData(@Body() sample: SampleDto, @Param('id') id: number) {
    console.error(id);
    return this.sampleRepository.updateRepository(id, sample);
  }
}
