import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from './config/config.module';
import { ClientService } from './client/client.service'
import { UserService } from './user/user.service';

@Module({
  imports: [AuthModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService, ClientService, UserService],
})
export class AppModule {}
