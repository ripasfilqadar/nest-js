import {
  Entity, Column, PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  BaseEntity,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

  @Entity('samples')
export default class SampleEntity extends BaseEntity {
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
