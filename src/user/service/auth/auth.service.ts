import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { SingInDto, SingUpDto } from 'src/user/dto/auth/sign.dto';
import { User } from 'src/user/interfaces/user.interface';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<User>,
    private jwtService: JwtService,
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
    const payload = {
      email: user.email,
      role: user.role,
    };
    const token = await this.jwtService.signAsync(payload, {
      secret: process.env.JWT_SECRET,
    });
    return { user, token };
  }
  async signUp(body: SingUpDto) {
    const password = await bcrypt.hash(body.password, 10);
    const hashed = {
      name: body.name,
      age: body.age,
      email: body.email,
      password,
      role: 'user',
    };
    const user = await this.userModel.create(hashed);
    const payload = {
      email: user.email,
      role: user.role,
    };
    const token = await this.jwtService.signAsync(payload, {
      secret: process.env.JWT_SECRET,
    });
    return { user, token };
  }
}
