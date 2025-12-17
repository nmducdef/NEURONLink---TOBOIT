import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('tbl_Users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  UserID: number;

  @Column({ type: 'nvarchar', length: 50, unique: true })
  Username: string;

  @Column({ type: 'nvarchar', length: 255 })
  Password: string;

  @Column({ type: 'nvarchar', length: 150, nullable: true })
  FullName?: string;

  @Column({ type: 'nvarchar', length: 20, nullable: true })
  Phone?: string;

  @Column({ type: 'nvarchar', length: 100, nullable: true })
  Email?: string;

  @Column({ type: 'int', nullable: true })
  CenterID?: number;

  @Column({ type: 'nvarchar', length: 20, default: 'ACTIVE' })
  Status: string;

  @CreateDateColumn({ type: 'datetime2' })
  CreatedAt: Date;

  @UpdateDateColumn({ type: 'datetime2' })
  UpdatedAt: Date;
}
