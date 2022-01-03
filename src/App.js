import { ReactKeycloakProvider } from "@react-keycloak/web";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import keycloak from "./keycloak";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Protected from "./pages/Protected";
import ProtectedRoute from "./helpers/ProtectedRoute";

function App() {
  return (
    <div>
      <ReactKeycloakProvider authClient={keycloak}>
        <Nav />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              path="/secured"
              element={
                <ProtectedRoute>
                  <Protected />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </ReactKeycloakProvider>
    </div>
  );
}

export default App;
