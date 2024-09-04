import { AuthService } from 'src/user/service/auth/auth.service';
import {
  AuthSignInController,
  AuthSingUpController,
} from './controller/auth/auth.controller';
import { Module } from '@nestjs/common';
import { UserController } from './controller/admin/user.controller';
import { UserService } from './service/admin/user.service';
import { UserProviders } from './providers/user.providers';
import { DatabaseModule } from 'src/database/database.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    DatabaseModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '180s' },
    }),
  ],
  controllers: [UserController, AuthSignInController, AuthSingUpController],
  providers: [UserService, AuthService, ...UserProviders],
})
export class UserModule {}
