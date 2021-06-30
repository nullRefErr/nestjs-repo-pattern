import { Injectable, LoggerService, Logger } from '@nestjs/common';
import * as winston from 'winston';

export class CustomLoggerInterface implements LoggerService {
  log(message: any, context?: string) {
    throw new Error('Method not implemented.');
  }
  error(message: any, trace?: string, context?: string) {
    throw new Error('Method not implemented.');
  }
  warn(message: any, context?: string) {
    throw new Error('Method not implemented.');
  }
  debug?(message: any, context?: string) {
    throw new Error('Method not implemented.');
  }
  verbose?(message: any, context?: string) {
    throw new Error('Method not implemented.');
  }
  _verbose?(message: any, context?: string, error?: Error) {
    this.verbose(message, context);
  }
}
