import { INestApplication } from '@nestjs/common';
import * as Sentry from '@sentry/node';
import * as Tracing from '@sentry/tracing';
import { SentryInterceptor } from './sentry.interceptor';

<<<<<<< HEAD
export function sentry(app: INestApplication) {
  //Sentry initialization
  Sentry.init({
    dsn: 'https://c629a407a109484b960378dc495bf9b1@sentry.24saatteis.com/8',
=======
export function sentry(app : INestApplication, dsn : string, tsr : number) {
//Sentry initialization
  Sentry.init({
    dsn: dsn,
>>>>>>> b5636987e2f995429c22cde7e460768508000aa5
    integrations: [
      new Sentry.Integrations.Http({ tracing: true }),

      new Tracing.Integrations.Express(),
    ],
    tracesSampleRate: tsr,
  });
  app.use(Sentry.Handlers.requestHandler());
  app.use(Sentry.Handlers.tracingHandler());
  app.use(Sentry.Handlers.errorHandler());
  app.useGlobalInterceptors(new SentryInterceptor());
}
