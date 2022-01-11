import { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Nav from "./components/Nav";

import Home from "./pages/Home";
import Protected from "./pages/Protected";
import Admin from "./pages/Admin";

import ProtectedRoute from "./helpers/ProtectedRoute";
import RolesProtectedRoute from "./helpers/RolesProtectedRoute";

const App: FC = () => {
  return (
    <div>
      <Nav />
      <Router>
        <Routes>
          <Route
            path="/protected"
            element={
              <ProtectedRoute>
                <Protected />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <RolesProtectedRoute roles={["admin", "moderator"]}>
                <Admin />
              </RolesProtectedRoute>
            }
          />
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
