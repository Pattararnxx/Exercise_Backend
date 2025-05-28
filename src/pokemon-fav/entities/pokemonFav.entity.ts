import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Users } from '../../users/entities/users.entity';

@Entity()
export class PokemonFav {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  pokemon_id: number;

  @ManyToOne(() => Users)
  @JoinColumn({ name: 'email', referencedColumnName: 'email' })
  user: Users;
}
