import { Injectable, LoggerService, Logger } from '@nestjs/common';
import * as winston from 'winston';

let wiLog;
@Injectable()
export class CustomLogger extends Logger implements LoggerService {
  constructor() {
    super();
    wiLog = winston.createLogger({
      level: 'info',
      format: winston.format.json(),
      transports: [
        new winston.transports.File({
          filename: 'error.log',
          level: 'error',
          format: winston.format.combine(
            winston.format.timestamp({ format: 'YYYY-MM-DD hh:mm:ss A ZZ' }),
            winston.format.json(),
          ),
        }),
      ],
    });
  }

  log(message: string) {
    /* your implementation */
    super.log(message);
    wiLog.info(message);
  }
  error(message: string, trace: string) {
    super.error(message, trace);
  }
  warn(message: string) {
    super.warn(message);
  }
  debug(message: string) {
    super.debug(message);
  }
  verbose(message: string) {
    super.verbose(message);
  }

  logTransport(message: string) {
    super.log(message);
    winston.info(message);
  }
  errorTransport(message: string, error?: Error) {
    super.log(`Message: ${message} Stack: ${error.stack}`);
    winston.error(message, { error });
  }
}
