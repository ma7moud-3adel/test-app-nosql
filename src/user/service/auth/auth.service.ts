import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/user/dto/admin/createUser.dto';
import { SingInDto } from 'src/user/dto/auth/signin.dto';
import { User } from 'src/user/interfaces/user.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<User>,
  ) {}
  async signIn(body: SingInDto) {
    const { email, password } = body;
    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new NotFoundException();
    }
    const hashed = user.password;
    const isMatch = await bcrypt.compare(password, hashed);
    if (!isMatch) {
      throw new NotFoundException();
    }
    return user;
  }
  async signUp(body: CreateUserDto) {
    const password = await bcrypt.hash(body.password, 10);
    const hashed = {
      name: body.name,
      age: body.age,
      email: body.email,
      password,
    };
    const user = await this.userModel.create(hashed);
    return user;
  }
}
