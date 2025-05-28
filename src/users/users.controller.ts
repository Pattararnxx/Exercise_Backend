import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './entities/users.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
  @Get()
  findAll() {
    return this.usersService.findAll();
  }
  @Patch(':email')
  update(@Param('email') email: string, @Body() users: Omit<Users, 'email'>) {
    return this.usersService.update(email, users);
  }
  @Delete(':email')
  delete(@Param('email') email: string) {
    return this.usersService.delete(email);
  }
}
