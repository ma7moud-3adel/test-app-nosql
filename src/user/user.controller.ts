import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { UserService } from './user.service';
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

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
  // *-----------------*
  // @desk : Create Users To DB
  // @route : Post / user
  // @access : Private
  @Post()
  createUser(@Body() body: CreateUserDto) {
    return this.userService.createUser(body);
  }
  // *-----------------*
  // *-----------------*
  // @desk : Update User In DB
  // @route : Patch / user / :id
  // @access : Private
  @Patch(':userId')
  updateUsersById(
    @Param('userId') userId: string,
    @Body() body: UpdateUserDto,
  ) {
    return this.userService.updateUsersById(userId, body);
  }
  // *-----------------*
}
