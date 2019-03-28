import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';

import { CreateUserDto } from './dto';

@Entity()
export class User extends CreateUserDto {
  @PrimaryGeneratedColumn('uuid')
  @ApiModelProperty({
    description: 'The id of the user',
    format: 'uuid',
  })
  id: string;
}
