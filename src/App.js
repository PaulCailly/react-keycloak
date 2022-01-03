import { useKeycloak } from "@react-keycloak/web";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./pages/Home";
import Protected from "./pages/Protected";
import ProtectedRoute from "./helpers/ProtectedRoute";

function App() {
  const { initialized } = useKeycloak();

  if (!initialized) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/protected"
            element={
              <ProtectedRoute>
                <Protected />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
