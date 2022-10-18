import React from "react";
import "./App.css";
import { CalculatorPage } from "./pages";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
  dsn: "https://2f7ac8876d054898b4fb31c628235aaf@o4504004729438208.ingest.sentry.io/4504004733894656",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

const App = () => {
  return (
    <div className="App">
      <CalculatorPage />
    </div>
  );
};

export default App;
