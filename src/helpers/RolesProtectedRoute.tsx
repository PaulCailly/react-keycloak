import { FC, ReactElement } from "react";
import { Navigate } from "react-router-dom";
import AuthService from "../services/AuthService";

type Props = {
  roles: string[];
  children: ReactElement<any, any> | null;
};

const RolesProtectedRoute: FC<Props> = ({ roles, children }) => {
  if (!AuthService.isLoggedIn()) {
    return <Navigate to="/" />;
  }

  if (!AuthService.hasRole(roles)) {
    return (
      <div>
        <h1>Access denied</h1>
        <p>
          This page requires one of this roles :
          <ul>
            {roles.map((role) => (
              <li>{role}</li>
            ))}
          </ul>
        </p>
      </div>
    );
  }
  return children;
};

export default RolesProtectedRoute;
