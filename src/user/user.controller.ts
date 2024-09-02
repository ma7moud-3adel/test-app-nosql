import { UserService } from './user.service';
import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  // *-----------------*
  // @desk : Get All Users From DB
  // @route : Get
  // @access : Puplic
  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }
}
