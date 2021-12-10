import {
  Entity, Column, PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

  @Entity('samples')
export default class SampleEntity {
    @ApiProperty({ type: String })
    @PrimaryGeneratedColumn()
     id: number = 1;

    @ApiProperty({ type: String, maxLength: 64 })
    @Column({ length: 64 })
     qoute: string = '';

  @UpdateDateColumn({ name: 'updated_date' })
   updatedAt!: Date

  @CreateDateColumn({ name: 'created_date' })
   createdDate!: Date
}
