import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignupDto } from './dto/sign-up.dto';
import * as argon2 from 'argon2';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prismaSerive: PrismaService,
  ) {}

  async findUser(username: string) {
    return await this.prismaSerive.user.findUnique({ where: { username } });
  }

  async signup(newUser: SignupDto) {
    const registerUser = await this.findUser(newUser.username);
    if (registerUser) {
      throw new ConflictException(
        `User with username ${newUser.username} already exists}`,
      );
    }

    const createdUser = await this.prismaSerive.user.create({
      data: {
        password: await argon2.hash(newUser.password),
        username: newUser.username,
      },
    });

    return this.createAccessToken(createdUser.username, createdUser.id);
  }

  createAccessToken(
    username: string,
    id: string,
  ): { accessToken: string; userId: string } {
    return {
      accessToken: this.jwtService.sign({ sub: username, id }),
      userId: id,
    };
  }

  async login(user: LoginDto): Promise<{ accessToken: string }> {
    try {
      const existingUser = await this.findUser(user.username);
      if (!existingUser) {
        throw new Error();
      }

      const passwordMatch = await argon2.verify(
        existingUser.password,
        user.password,
      );
      if (!passwordMatch) {
        throw new Error();
      }
      return this.createAccessToken(existingUser.username, existingUser.id);
    } catch (e) {
      throw new UnauthorizedException(
        'Username or password may be incorrect. Please try again',
      );
    }
  }
}
