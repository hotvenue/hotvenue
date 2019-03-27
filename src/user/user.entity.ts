import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
import {IsEmail} from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 500,
    unique: true,
  })
  @IsEmail()
  email: string;

  @Column()
  telegramId: string;
}
