import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { SignupDto } from './dto/sign-up.dto';
import { JwtGuard } from './guards/jwt.guard';
import { SignupPipe } from './pipes/signup.pipe';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body(SignupPipe) newUser: SignupDto) {
    return this.authService.signup(newUser);
  }

  @Post('login')
  async login(@Body() user: LoginDto) {
    return this.authService.login(user);
  }

  @UseGuards(JwtGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
