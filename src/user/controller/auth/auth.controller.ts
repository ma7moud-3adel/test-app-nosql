import {
  Body,
  Controller,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
// import { CreateUserDto } from 'src/user/dto/admin/createUser.dto';
import { SingInDto, SingUpDto } from 'src/user/dto/auth/sign.dto';
// import { Roles } from 'src/user/guards/roles.decorator';
// import { UsersGuard } from 'src/user/guards/users.guard';
import { AuthService } from 'src/user/service/auth/auth.service';

@Controller('sign-in')
// @UseGuards(UsersGuard)
export class AuthSignInController {
  constructor(private readonly authService: AuthService) {}
  @Post()
  // @Roles(['admin', 'manger', 'user'])
  signIn(
    @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    body: SingInDto,
  ) {
    return this.authService.signIn(body);
  }
}
@Controller('sign-up')
// @UseGuards(UsersGuard)
export class AuthSingUpController {
  constructor(private readonly authService: AuthService) {}
  @Post()
  // @Roles(['admin', 'manger', 'user'])
  signUp(
    @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    body: SingUpDto,
  ) {
    return this.authService.signUp(body);
  }
}
