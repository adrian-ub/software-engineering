import * as Strategy from 'passport-ldapauth';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LdapStrategy extends PassportStrategy(Strategy, 'ldap') {
  constructor() {
    super(
      {
        passReqToCallback: true,
        server: {
          url: 'ldap://host.docker.internal:389',
          bindDN: 'cn=admin,dc=arqsoft,dc=unal,dc=edu,dc=co',
          bindCredentials: 'admin',
          searchBase: 'ou=sa,cn=user,dc=arqsoft,dc=unal,dc=edu,dc=co',
          searchFilter: '(uid={{username}})',
          searchAttributes: ['displayName', 'mail'],
        },
      },
      async (req: any, user: any, done) => {
        req.user = user;
        return done(null, user);
      },
    );
  }

  async close(callback?: ErrorCallback) {
    console.log('asda');
  }
}
