import { PartialType } from '@nestjs/mapped-types';
import { IsInt, IsString } from 'class-validator';
import { CreateUserDto } from './createUser.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  name: string;

  @IsInt()
  age: number;

  @IsString()
  email: string;
}
