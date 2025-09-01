
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { passportJwtSecret } from 'jwks-rsa';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKeyProvider: passportJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
         jwksUri: `${process.env.SUPABASE_PROJECT}/auth/v1/.well-known/jwks.json`,
      
      }),
      algorithms: ['ES256'],
      issuer: `${process.env.SUPABASE_PROJECT}/auth/v1`,
      audience: 'authenticated',
    });
  }

  async validate(payload: any) {
    //console.log(payload)
    return {
      userId: payload.sub,
      email: payload.email,
      role: payload['app-role'],
    };
  }
}

