import { useKeycloak } from "@react-keycloak/web";

const Nav = () => {
  const { keycloak } = useKeycloak();

  return (
    <nav>
      <div>
        <h1>Keycloak React</h1>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/secured">Secured Page</a>
          </li>
        </ul>
        <div>
          {!keycloak.authenticated && (
            <button type="button" onClick={() => keycloak.login()}>
              Login
            </button>
          )}

          {!!keycloak.authenticated && (
            <button type="button" onClick={() => keycloak.logout()}>
              Logout ({keycloak.tokenParsed.preferred_username})
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
