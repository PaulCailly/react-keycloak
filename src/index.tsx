import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import AuthService from "./service/AuthService";

const renderApp = () =>
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );

AuthService.initKeycloak(renderApp);
