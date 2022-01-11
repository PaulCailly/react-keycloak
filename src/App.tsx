import { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./pages/Home";
import Protected from "./pages/Protected";
import ProtectedRoute from "./helpers/ProtectedRoute";

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
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
