import { UserService } from './user.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  // *-----------------*
  // @desk : Get All Users From DB
  // @route : Get / user
  // @access : Puplic
  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }
  // *-----------------*
  // *-----------------*
  // @desk : Get One User By ID From DB
  // @route : Get / user / :id
  // @access : Private
  @Get(':userId')
  getUsersById(@Param('userId') userId: string) {
    return this.userService.getUsersById(userId);
  }
  // *-----------------*
}
