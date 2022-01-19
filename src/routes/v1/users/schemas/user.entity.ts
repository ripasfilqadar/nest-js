import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

import { RolesEnum } from '@decorators/roles.decorator';
import { MinLength } from 'class-validator';
import RiwayatPekerjaanEntity from '@v1/users/schemas/riwayat-pekerjaan.entity';

@Entity('users')
export default class UserEntity {
  @ApiProperty({ type: String })
  @PrimaryGeneratedColumn()
  readonly id: number = 1;

	@CreateDateColumn({ name: 'created_at' })
	readonly createdAt: Date = new Date()

	@UpdateDateColumn({ name: 'updated_at' })
	readonly updatedAt: Date = new Date()

  @ApiProperty({ type: String, maxLength: 64 })
  @Column({ length: 64 })
  readonly password: string = '';

  @ApiProperty({ type: String, maxLength: 64 })
  @Column({ length: 64 })
  @Index({ unique: true })
  readonly email: string = '';

  @ApiProperty({ type: Boolean })
  @Column({ type: 'tinyint' })
  readonly verified: boolean = false;

  @ApiProperty({ type: String, default: RolesEnum.user, enum: RolesEnum })
  @Column({ type: 'enum', enum: RolesEnum, default: RolesEnum.user })
  readonly role: RolesEnum = RolesEnum.user;

	@ApiProperty({ type: String })
	@Column({ type: String, nullable: false })
	readonly name: string = ''

	@ApiProperty({ type: String })
	@Column({ type: String, nullable: true })
	@MinLength(5)
	readonly phoneNumber: string = ''

	@ApiProperty({ type: String })
	@Column({ type: String, nullable: true })
	readonly facebookToken: string = ''

	@ApiProperty({ type: String })
	@Column({ type: String, nullable: true })
	readonly gmailToken: string = ''

	@ApiProperty({ type: [] })
	@OneToMany(() => RiwayatPekerjaanEntity, (jobs) => jobs.userId)
	readonly jobs: RiwayatPekerjaanEntity[] = []
}
