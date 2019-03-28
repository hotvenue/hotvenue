import { Column } from 'typeorm';
import { IsEmail, IsString } from 'class-validator';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto {
  @Column({
    length: 500,
    unique: true,
  })
  @ApiModelProperty({
    description: 'The email of the user, must be unique',
    format: 'email',
  })
  @IsString()
  @IsEmail()
  email: string;

  @Column()
  @ApiModelPropertyOptional({
    description: 'The telegram identifier of the user',
  })
  telegramId: string;
}
