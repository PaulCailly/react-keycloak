import { FC, ReactElement } from "react";
import { Navigate } from "react-router-dom";

import AuthService from "../services/AuthService";

type Props = {
  children: ReactElement<any, any> | null;
};

const ProtectedRoute: FC<Props> = ({ children }) => {
  if (!AuthService.isLoggedIn()) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
