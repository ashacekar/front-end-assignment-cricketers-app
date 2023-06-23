import 'react-app-polyfill/ie11';
import 'sd-ui-components/dist/styles/smartdrive.css';
import 'core-js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import * as serviceWorker from './serviceWorkerRegistration';
import HttpsRedirect from 'react-https-redirect';
import { MainRoutes } from './routes';
import MessageProvider from './providers/MessageProvider';
import { LocaleProvider } from './providers/LocaleProvider';

(async () => {
  const Root = (
    <LocaleProvider>
        <HttpsRedirect>
                <MessageProvider>
                  <MainRoutes />
                </MessageProvider>
        </HttpsRedirect>
    </LocaleProvider>
  );

  const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
  root.render(Root);
  serviceWorker.register();
})();

// Code-splitting using react-router
// https://github.com/AnomalyInnovations/serverless-stack-demo-client/tree/code-splitting-in-create-react-app
