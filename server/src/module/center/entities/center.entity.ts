import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_Centers')
export class CenterEntity {
  @PrimaryGeneratedColumn()
  CenterID: number;

  @Column({ type: 'nvarchar', length: 150 })
  CenterName: string;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Address?: string;

  @Column({ type: 'nvarchar', length: 20, nullable: true })
  Phone?: string;

  @Column({ type: 'nvarchar', length: 100, nullable: true })
  Email?: string;

  @Column({ type: 'nvarchar', length: 20, default: 'ACTIVE' })
  Status: string;

  @CreateDateColumn({ type: 'datetime2' })
  CreatedAt: Date;
}
