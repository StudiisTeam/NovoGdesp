import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { expressJwtSecret } from 'jwks-rsa';
import { ExceptionsService } from 'src/infra/exceptions/exceptions.service';
import { promisify } from 'util';
import jwt from 'express-jwt';
import * as dotenv from 'dotenv';


@Injectable()
export class AuthorizationGuard implements CanActivate {
  private AUTH0_AUDIENCE: string;
  private AUTH0_DOMAIN: string;

  constructor(
    // private configService: ConfigService,
    // private readonly exceptionsService: ExceptionsService
  ) {
    // this.AUTH0_AUDIENCE = this.configService.get('AUTH0_AUDIENCE') ?? '';
    // this.AUTH0_DOMAIN = this.configService.get('AUTH0_DOMAIN') ?? '';
    this.AUTH0_AUDIENCE = process.env.AUTH0_AUDIENCE ?? '';
    this.AUTH0_DOMAIN = process.env.AUTH0_DOMAIN ?? '';
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // const { req, res } = GqlExecutionContext.create(context).getContext();
    const httpContext = context.switchToHttp();
    const request = httpContext.getRequest();
    const response = httpContext.getResponse();


    const checkJwt = promisify(
      jwt({
        secret: expressJwtSecret({
          cache: true,
          rateLimit: true,
          jwksRequestsPerMinute: 5,
          jwksUri: `${this.AUTH0_DOMAIN}.well-known/jwks.json`,
        }),
        audience: this.AUTH0_AUDIENCE,
        issuer: this.AUTH0_DOMAIN,
        algorithms: ['RS256'],
      }),
    );

    try {
      await checkJwt(request, response);
      console.log(request);
      return true;
    } catch (err) {
      // this.exceptionsService.unauthotizedException(err);
      throw new UnauthorizedException(err);
    }
  }
}