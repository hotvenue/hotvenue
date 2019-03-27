import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { validate } from 'class-validator';

import { User } from './user.entity';
import { CreateUserDto } from './dto';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findById(id: string): Promise<User> {
    return this.userRepository.findOne(id);
  }

  async create(userData: CreateUserDto): Promise<User> {
    const user = new User();
    user.email = userData.email.toLowerCase();
    user.telegramId = userData.telegramId;

    const errors = await validate(user);

    if (errors.length > 0) {
      throw new Error('Validation failed');
    }

    return this.userRepository.save(user);
  }
}
