import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { User } from './user.entity';
import { UserService } from './user.service';

import { CreateUserDto } from './dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async list(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get('/:id')
  async retrieve(@Param('id') id): Promise<User> {
    return this.userService.findById(id);
  }

  @Post()
  async create(@Body('user') userData: CreateUserDto) {
    return this.userService.create(userData);
  }
}
