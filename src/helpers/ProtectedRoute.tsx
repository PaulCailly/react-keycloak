import { FC, ReactElement } from "react";
import { Navigate } from "react-router-dom";

import AuthService from "../service/AuthService";

type Props = {
  children: ReactElement<any, any> | null;
};

const ProtectedRoute: FC<Props> = ({ children }) => {
  return AuthService.isLoggedIn() ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
