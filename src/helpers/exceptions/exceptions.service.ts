import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException
} from '@nestjs/common';
import { ExcetionsServiceInterface, FormatExceptionMessageType } from 'src/domain/interfaces/exception.interface';

@Injectable()
export class ExceptionsService implements ExcetionsServiceInterface {
  badRequestException(data: FormatExceptionMessageType): void {
    throw new BadRequestException(data);
  }
  internalServerErrorException(data?: FormatExceptionMessageType): void {
    throw new InternalServerErrorException(data);
  }
  forbiddenException(data?: FormatExceptionMessageType): void {
    throw new ForbiddenException(data);
  }
  unauthotizedException(data?: FormatExceptionMessageType): void {
    throw new UnauthorizedException('Method not implemented.');
  }
}
