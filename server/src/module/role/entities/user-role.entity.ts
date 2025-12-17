import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity({ name: 'tbl_UserRoles' })
@Unique('UQ_User_Role', ['userId', 'roleId'])
export class UserRoleEntity {
  @PrimaryGeneratedColumn({ name: 'UserRoleID' })
  userRoleId: number;

  @Column({ name: 'UserID', type: 'int' })
  userId: number;

  @Column({ name: 'RoleID', type: 'int' })
  roleId: number;

  @CreateDateColumn({
    name: 'CreatedAt',
    type: 'datetime',
    default: () => 'GETDATE()',
  })
  createdAt: Date;
}
