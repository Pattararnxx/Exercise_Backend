import { Entity, Column, PrimaryColumn } from 'typeorm';
@Entity()
export class Users {
  @PrimaryColumn()
  email: string;

  @Column()
  password: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({ default: true })
  is_active: boolean;

  // MySQL version in FreeSQLDatabase is old so we use this
  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;
}
