import { Injectable } from '@nestjs/common';
import { User } from './user.models';
import { ClientService } from 'src/client/client.service'
import { ConfigService } from 'src/config/config.service';

const users: {[key: string]: User} = {};

@Injectable()
export class UserService {
  constructor(
    private readonly clientService: ClientService,
    private readonly configService: ConfigService,
  ) {}

  get(id: string): User {
    return users[id];
  }

  set(id: string, user: User) {
    users[id] = user;
  }
}
