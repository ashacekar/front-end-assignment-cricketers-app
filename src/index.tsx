import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom/client';
import * as serviceWorker from './serviceWorkerRegistration';
import { MainRoutes } from './routes';
import "antd/dist/antd.css";


(async () => {
  const Root = (

                  <MainRoutes />
  );

  const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
  root.render(Root);
  serviceWorker.register();
})();

// Code-splitting using react-router
// https://github.com/AnomalyInnovations/serverless-stack-demo-client/tree/code-splitting-in-create-react-app
