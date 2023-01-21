import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { expressJwtSecret } from 'jwks-rsa';
import { promisify } from 'util';
import { expressjwt as jwt, GetVerificationKey } from 'express-jwt'; 'express-jwt';
import { GqlExecutionContext } from '@nestjs/graphql';


@Injectable()
export class AuthorizationGuard implements CanActivate {
  private AUTH0_AUDIENCE: string;
  private AUTH0_DOMAIN: string;

  constructor() {
    this.AUTH0_AUDIENCE = process.env.AUTH0_AUDIENCE ?? '';
    this.AUTH0_DOMAIN = process.env.AUTH0_DOMAIN ?? '';
  }


  async canActivate(context: ExecutionContext): Promise<boolean> {
    const { req, res } = GqlExecutionContext.create(context).getContext();

    var secret = expressJwtSecret({
      jwksUri: `${this.AUTH0_DOMAIN}.well-known/jwks.json`,
    }) as GetVerificationKey
    const jwksUri = `${this.AUTH0_DOMAIN}.well-known/jwks.json`

    // const token = expressJwtSecret({
    //   cache: true,
    //   rateLimit: true,
    //   jwksRequestsPerMinute: 20,
    //   jwksUri: `${this.AUTH0_DOMAIN}.well-known/jwks.json`,
    // })
    // console.log('teste ' + token, 'domains ' + this.AUTH0_DOMAIN);

    const checkJwt = promisify(
      jwt({
        secret: expressJwtSecret({
          cache: true,
          rateLimit: true,
          jwksRequestsPerMinute: 5,
          jwksUri: `${this.AUTH0_DOMAIN}.well-known/jwks.json`,
        }) as GetVerificationKey,
        audience: this.AUTH0_AUDIENCE,
        issuer: this.AUTH0_DOMAIN,
        algorithms: ['RS256'],
      }),
    );

    try {
      console.log(req);

      await checkJwt(req, res);
      return true;
    } catch (error) {
      throw new UnauthorizedException(error.message);
    }
  }
}