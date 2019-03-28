import { join } from 'path';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from 'nestjs-config';

import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './user.entity';

describe('UserController', () => {
  let userController: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      // @ts-ignore
      imports: [
        ConfigModule.resolveRootPath(join(__dirname, '..', '..')).load(
          'config/**/!(*.d).{ts,js}',
        ),
        TypeOrmModule.forRootAsync({
          useFactory: async (config: ConfigService) => config.get('database'),
          inject: [ConfigService],
        }),
        TypeOrmModule.forFeature([User]),
      ],
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    userService = app.get<UserService>(UserService);
    userController = app.get<UserController>(UserController);
  });

  describe('list', () => {
    it('should return an array of users', async () => {
      const result = ['test'];

      // @ts-ignore
      jest.spyOn(userService, 'findAll').mockImplementation(() => result);

      expect(await userController.list()).toBe(result);
    });
  });
});
