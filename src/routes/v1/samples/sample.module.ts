import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SampleService } from './sample.service';
/*
https://docs.nestjs.com/modules
*/
import SamplesController from './samples.controller';
import SampleEntity from './schemas/sample.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([SampleEntity]),
  ],
  controllers: [SamplesController],
  providers: [
    SampleService]
  ,
})
export default class SampleModule { }
