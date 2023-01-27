import { Injectable, Logger } from '@nestjs/common';
import { LoggerServiceInterface } from 'src/domain/interfaces/logger.interface';

@Injectable()
export class LoggerService extends Logger implements LoggerServiceInterface {
  debug(message: any, context?: string): void {
    if (process.env.AMBIENT_ENV !== 'production') {
      super.debug(`[DEBUG] ${message}`, context);
    }
  }
  log(message: any, context?: string): void {
    if (process.env.AMBIENT_ENV !== 'production') {
      super.debug(`[LOG] ${message}`, context);
    }
  }
  error(message: any, context?: string, trace?: string): void {
    if (process.env.AMBIENT_ENV !== 'production') {
      super.debug(`[ERROR] ${message}`, trace, context);
    }
  }
  warn(message: any, context?: string): void {
    if (process.env.AMBIENT_ENV !== 'production') {
      super.debug(`[WARN] ${message}`, context);
    }
  }
  verbose(message: any, context?: string): void {
    if (process.env.AMBIENT_ENV !== 'production') {
      super.debug(`[VERBOSE] ${message}`, context);
    }
  }
}
