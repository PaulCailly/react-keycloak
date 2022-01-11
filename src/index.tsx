import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import AuthService from "./services/AuthService";
import HttpService from "./services/HttpService";

const renderApp = () =>
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );

AuthService.initKeycloak(renderApp);
HttpService.configure();
