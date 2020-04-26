import { Injectable } from '@nestjs/common';
import { User } from 'src/user/user.models';

@Injectable()
export class AuthService {
  login(user: User): string {
    return ({user}).toString();
  }
}
