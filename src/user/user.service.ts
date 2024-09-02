import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<User>,
  ) {}
  // *-----------------*
  // @desk : Get All Users From DB
  // @route : Get
  // @access : Puplic
  getAllUsers(): Promise<User[]> {
    return this.userModel.find();
  }
}
