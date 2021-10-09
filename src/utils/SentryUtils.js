import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import config from "../config.json";

export const InitSentry = () => {
  //Sentry Integration
  Sentry.init({
    dsn: config.SENTRY_DSN,
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 0,
  });
};

export const LogError = (e) => {
  Sentry.captureMessage(e);
};
