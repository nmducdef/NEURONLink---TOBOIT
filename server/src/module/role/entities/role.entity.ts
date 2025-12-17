import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_Roles')
export class RoleEntity {
  @PrimaryGeneratedColumn()
  RoleID: number;

  @Column({ type: 'nvarchar', length: 50, unique: true })
  RoleCode: string;

  @Column({ type: 'nvarchar', length: 150 })
  RoleName: string;

  @CreateDateColumn({ type: 'datetime2' })
  CreatedAt: Date;
}
