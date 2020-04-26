import {
  Controller,
  Get,
  Post,
  Request,
  Response,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Get('login')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  login() {}

  @Post('callback')
  async callback(@Request() req, @Response() res): Promise<void> {
    res.redirect();
  }


  @Get('/logout')
  logout(@Request() req, @Response() res): void {
    req.session.destroy(function(err) {
      if (err) {
        throw err;
      }

      req.logout();
      res.redirect('/');
    });
  }
}
