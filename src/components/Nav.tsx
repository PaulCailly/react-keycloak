import AuthService from "../services/AuthService";
import { FC } from "react";

const Nav: FC = () => {
  return (
    <nav>
      <div>
        <h1>Keycloak React</h1>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/protected">Protected page</a>
          </li>
          <li>
            <a href="/admin">Admin page</a>
          </li>
        </ul>
        <div>
          {!AuthService.isLoggedIn() && (
            <button type="button" onClick={() => AuthService.login()}>
              Login
            </button>
          )}

          {!!AuthService.isLoggedIn() && (
            <button type="button" onClick={() => AuthService.logout()}>
              Logout ({AuthService.getUsername()})
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
