import {
  IsEmail,
  IsInt,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class SingInDto {
  @IsEmail({}, { message: 'Please Enter A Valid E-mail' })
  email: string;
  @MinLength(5)
  @MaxLength(20)
  password: string;
}

export class SingUpDto {
  @IsString()
  name: string;

  @IsInt()
  age: number;
  @IsEmail({}, { message: 'Please Enter A Valid E-mail' })
  email: string;
  @MinLength(5)
  @MaxLength(20)
  password: string;
}
