import React from "react";
import ReactDOM from "react-dom";
import { ReactKeycloakProvider } from "@react-keycloak/web";

import App from "./App";
import keycloak from "./keycloak";

ReactDOM.render(
  <React.StrictMode>
    <ReactKeycloakProvider authClient={keycloak}>
      <App />
    </ReactKeycloakProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
