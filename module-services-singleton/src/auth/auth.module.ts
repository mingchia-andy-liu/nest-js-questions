import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from '../user/user.service';
import { ClientService } from 'src/client/client.service'

@Module({
  imports: [
    ClientService,
    UserService, // <-- offending line
  ],
  providers: [
    AuthService,
    ClientService,
    UserService
  ],
  controllers: [AuthController],
})
export class AuthModule {}
