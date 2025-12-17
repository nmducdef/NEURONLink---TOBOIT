import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_Functions')
export class FunctionEntity {
  @PrimaryGeneratedColumn()
  FunctionID: number;

  @Column({ type: 'nvarchar', length: 100, unique: true })
  FunctionCode: string;

  @Column({ type: 'nvarchar', length: 150 })
  FunctionName: string;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Path?: string;

  @CreateDateColumn({ type: 'datetime2' })
  CreatedAt: Date;
}
