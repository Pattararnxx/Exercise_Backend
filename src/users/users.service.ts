import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Users } from './entities/users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: Repository<Users>,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<Users> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    const user = {
      ...createUserDto,
      password: hashedPassword,
    };

    return this.usersRepository.save(user);
  }
  async findAll(): Promise<Users[]> {
    return this.usersRepository.find();
  }

  update(email: string, users: Omit<Users, 'email'>) {
    return this.usersRepository.update(email, users);
  }

  delete(email: string) {
    return this.usersRepository.delete(email);
  }
}
