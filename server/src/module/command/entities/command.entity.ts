import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_Commands')
export class CommandEntity {
  @PrimaryGeneratedColumn()
  CommandID: number;

  @Column({ type: 'nvarchar', length: 100, unique: true })
  CommandCode: string;

  @Column({ type: 'nvarchar', length: 150 })
  CommandName: string;

  @CreateDateColumn({ type: 'datetime2' })
  CreatedAt: Date;
}
