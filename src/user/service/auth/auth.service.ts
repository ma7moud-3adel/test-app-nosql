import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/user/dto/admin/createUser.dto';
import { SingInDto } from 'src/user/dto/auth/signin.dto';
import { User } from 'src/user/interfaces/user.interface';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<User>,
  ) {}
  async signIn(body: SingInDto) {
    const { email, password } = body;
    const user = await this.userModel.findOne({ email, password });
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }
  async signUp(body: CreateUserDto) {
    const user = await this.userModel.create(body);
    return user;
  }
}
