import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiUseTags, ApiCreatedResponse, ApiForbiddenResponse, ApiOkResponse, ApiImplicitParam } from '@nestjs/swagger';

import { User } from './user.entity';
import { UserService } from './user.service';

import { CreateUserDto } from './dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiUseTags('user')
  @ApiOkResponse({ description: 'All the users', type: Array(User) })
  @Get()
  async list(): Promise<User[]> {
    return this.userService.findAll();
  }

  @ApiUseTags('user')
  @ApiOkResponse({ description: 'The user identified by the "id"', type: User })
  @ApiImplicitParam({ name: 'id', type: String })
  @Get('/:id')
  async retrieve(@Param('id') id): Promise<User> {
    return this.userService.findById(id);
  }

  @ApiUseTags('user')
  @ApiCreatedResponse({ description: 'The user has been successfully created.', type: User })
  @ApiForbiddenResponse({ description: 'The caller cannot create a user' })
  @Post()
  async create(@Body() userData: CreateUserDto): Promise<User> {
    return this.userService.create(userData);
  }
}
