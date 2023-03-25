import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
// import { LoginDto } from './dto/login.dto';
import { SignupDto } from './dto/sign-up.dto';
import { JwtGuard } from './guards/jwt.guard';
import { SignupPipe } from './pipes/signup.pipe';
import * as passport from 'passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body(SignupPipe) newUser: SignupDto) {
    return this.authService.signup(newUser);
  }

  //   @Post('login')
  //   async login(@Body() user: LoginDto) {
  //     return this.authService.login(user);
  //   }

  @UseGuards(JwtGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @UseGuards(AuthGuard('ldap'))
  @Post('login')
  async ldapLogin(@Request() req) {
    passport.authenticate('ldap', { session: false });
    return this.authService.login({
      password: req.body.password,
      username: req.body.username,
    });
  }
}
