import { INestApplication } from "@nestjs/common";
import * as Sentry from '@sentry/node';
import * as Tracing from '@sentry/tracing';
import { SentryInterceptor } from './sentry.interceptor';

export function sentry(app : INestApplication) {
//Sentry initialization
  Sentry.init({
    dsn: "https://c629a407a109484b960378dc495bf9b1@sentry.24saatteis.com/8",
    integrations: [
      new Sentry.Integrations.Http({ tracing: true }),

      new Tracing.Integrations.Express(),
    ],
    tracesSampleRate: 1.0,
  });
  app.use(Sentry.Handlers.requestHandler());
  app.use(Sentry.Handlers.tracingHandler());
  app.use(Sentry.Handlers.errorHandler());
  app.useGlobalInterceptors(new SentryInterceptor());
}