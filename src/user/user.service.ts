import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<User>,
  ) {}
  // *-----------------*
  // @desc : Get All Users From DB
  // @route : Get / user
  // @access : Puplic
  async getAllUsers(): Promise<User[]> {
    return await this.userModel.find().select('-_id name age email');
  }
  // *-----------------*
  // *-----------------*
  // @desc : Get One User By ID From DB
  // @route : Get / user / :id
  // @access : Private
  async getUsersById(userId: string): Promise<User> {
    const user = await this.userModel
      .findById(userId)
      .select('-_id name age email');
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }
  // *-----------------*
  // *-----------------*
  // @desc : Create Users To DB
  // @route : Post / user
  // @access : Private
  async createUser(body: CreateUserDto) {
    return await this.userModel.create(body);
  }
  // *-----------------*
  // *-----------------*
  // @desc : Update User In DB
  // @route : Patch / user / :id
  // @access : Private
  async updateUsersById(userId: string, body: UpdateUserDto): Promise<User> {
    const user = await this.userModel
      .findByIdAndUpdate(userId, body)
      .select('-_id name age email');
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }
  // *-----------------*
  // *-----------------*
  // @desc : Get One User By ID And Delete From DB
  // @route : Delete / user / :id
  // @access : Private[Admin]
  async deleteUsersById(userId: string): Promise<User> {
    const user = await this.userModel.findById(userId);
    if (!user) {
      throw new NotFoundException();
    }
    return await this.userModel.findByIdAndDelete(userId);
  }
  // *-----------------*
}
