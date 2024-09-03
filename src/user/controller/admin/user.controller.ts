import { CreateUserDto } from '../../dto/admin/createUser.dto';
import { UpdateUserDto } from '../../dto/admin/updateUser.dto';
import { Roles } from '../../guards/roles.decorator';
import { UserService } from '../../service/admin/user.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  // *-----------------*
  // @desc : Get All Users From DB
  // @route : Get / user
  // @access : Private [Admin, Manger]
  @Roles(['Admin', 'Manger'])
  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }
  // *-----------------*
  // *-----------------*
  // @desc : Get One User By ID From DB
  // @route : Get / user / :id
  // @access : Private ['Admin', 'Manger']
  @Roles(['Admin', 'Manger'])
  @Get(':userId')
  getUsersById(@Param('userId') userId: string) {
    return this.userService.getUsersById(userId);
  }
  // *-----------------*
  // *-----------------*
  // @desc : Create Users To DB
  // @route : Post / user
  // @access : Private ['Admin']
  @Roles(['Admin'])
  @Post()
  createUser(@Body() body: CreateUserDto) {
    return this.userService.createUser(body);
  }
  // *-----------------*
  // *-----------------*
  // @desc : Update User In DB
  // @route : Patch / user / :id
  // @access : Private ['Admin', 'Manger']
  @Roles(['Admin', 'Manger'])
  @Patch(':userId')
  updateUsersById(
    @Param('userId') userId: string,
    @Body() body: UpdateUserDto,
  ) {
    return this.userService.updateUsersById(userId, body);
  }
  // *-----------------*
  // *-----------------*
  // @desc : Get One User By ID And Delete From DB
  // @route : Delete / user / :id
  // @access : Private[Admin]
  @Roles(['Admin'])
  @Delete(':userId')
  deleteUsersById(@Param('userId') userId: string) {
    return this.userService.deleteUsersById(userId);
  }
  // *-----------------*
  // *-----------------*
}
