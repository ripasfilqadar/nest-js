import {
  NotFoundException,
  Body, Controller, Get, HttpCode, HttpStatus, Param, Patch, Post, UseGuards,
} from '@nestjs/common';
/*
https://docs.nestjs.com/controllers#controllers
*/

import JwtAccessGuard from '@guards/jwt-access.guard';
import {
  ApiBadRequestResponse, ApiBearerAuth, ApiBody, ApiOkResponse, ApiParam, ApiTags,
} from '@nestjs/swagger';
import SampleEntity from '@v1/samples/schemas/sample.entity';
import responseUtils from '@utils/response.utils';
import SampleDto from './dto/sample.dto';

@ApiTags('Samples')
@UseGuards(JwtAccessGuard)
@ApiBearerAuth()
@Controller('samples')
export default class SamplesController {
  constructor(
  ) {
  }

  @Get()
  async getAllSample() {
    const data = await SampleEntity.find();
    return responseUtils.success(
      'sample', data,
    );
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
    const data = new SampleEntity();
    data.qoute = sample.qoute;
    SampleEntity.save(data);
    return sample;
  }

  @ApiBody({ type: SampleDto })
  @ApiOkResponse({
    description: '200, Success',
  })
  @ApiParam({ name: 'id', type: Number })
  @Patch(':id')
  async updateData(@Body() sample: SampleDto, @Param('id') id: number) {
    const data = await SampleEntity.findOneOrFail(id);
    if (data) {
      data.qoute = sample.qoute;
      data.save();
      return data;
    }
    throw new NotFoundException('Data tidak ditemukan');
  }
}
