import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PassportModule } from '@nestjs/passport';
import { LdapStrategy } from './ldap.strategy';

@Module({
  imports: [
    JwtModule.register({ secret: '$up3r$3cr3t' }),
    PassportModule.register({ defaultStrategy: 'ldap' }),
  ],
  providers: [AuthService, PrismaService, LdapStrategy],
  controllers: [AuthController],
  exports: [JwtModule],
})
export class AuthModule {}
