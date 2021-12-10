import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import SampleDto from './dto/sample.dto';
import SampleEntity from './schemas/sample.entity';

@Injectable()
export default class SampleRepository {
  constructor(
        @InjectRepository(SampleEntity)
        private readonly sampleModel: Repository<SampleEntity>,
  ) {

  }

  getAllSample() {
    return this.sampleModel.find({});
  }

  addSample(sample: SampleDto) {
    this.sampleModel.save(sample);
    return sample;
  }

  async updateRepository(id: number, sample: SampleDto) {
    let data = await this.sampleModel.findOne({ id });
    if (data) {
      data = { ...data, ...sample };
      this.sampleModel.save(data);
      return data;
    }
  }
}
