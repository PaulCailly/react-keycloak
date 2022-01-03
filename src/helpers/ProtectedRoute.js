import { useKeycloak } from "@react-keycloak/web";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { keycloak } = useKeycloak();

  const isLoggedIn = keycloak.authenticated;

  return isLoggedIn ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
