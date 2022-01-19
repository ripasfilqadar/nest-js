import { ApiProperty } from '@nestjs/swagger';
import {
  Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn,
} from 'typeorm';

@Entity('riwayat_pekerjaan')

export default class RiwayatPekerjaanEntity {
	@PrimaryGeneratedColumn()
	readonly id: number = 1

	@ApiProperty({ type: String })
	@Column({ type: String, nullable: false })
	readonly job = 1

	@ApiProperty({ type: Number })
	@Column({ type: Number, nullable: false, name: 'user_id' })
	readonly userId = ''

	@CreateDateColumn({ name: 'created_at' })
	readonly createdAt: Date = new Date()

	@UpdateDateColumn({ name: 'updated_at' })
	readonly updatedAt: Date = new Date()
}
