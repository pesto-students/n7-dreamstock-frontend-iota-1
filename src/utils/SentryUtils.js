import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

export const InitSentry = () => {
  //Sentry Integration
  Sentry.init({
    dsn:
      "https://224e05c536964f438a14ba68877822c8@o1021977.ingest.sentry.io/5988150",
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 0,
  });
};

export const LogError = (e) => {
  Sentry.captureMessage(e);
};