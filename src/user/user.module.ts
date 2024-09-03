import { Module } from '@nestjs/common';
import { UserController } from './controller/admin/user.controller';
import { UserService } from './service/admin/user.service';
import { UserProviders } from './providers/user.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService, ...UserProviders],
})
export class UserModule {}
