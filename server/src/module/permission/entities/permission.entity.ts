import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_Permissions')
export class PermissionEntity {
  @PrimaryGeneratedColumn()
  PermissionID: number;

  @Column({ type: 'int' })
  RoleID: number;

  @Column({ type: 'int' })
  FunctionID: number;

  @Column({ type: 'int' })
  CommandID: number;

  @CreateDateColumn({ type: 'datetime2' })
  CreatedAt: Date;
}
