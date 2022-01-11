import Keycloak from "keycloak-js";

const keycloak = Keycloak("./keycloak.json");

const initKeycloak = (onAuthenticatedCallback: () => void) => {
  keycloak
    .init({
      onLoad: "check-sso",
      silentCheckSsoRedirectUri:
        window.location.origin + "/silent-check-sso.html",
      pkceMethod: "S256",
    })
    .then((authenticated) => {
      if (!authenticated) {
        console.log("User is not authenticated");
      }
      console.log(getToken());
      onAuthenticatedCallback();
    })
    .catch(console.error);
};

const login = keycloak.login;

const logout = keycloak.logout;

const getToken = () => keycloak.token;

const isLoggedIn = () => !!keycloak.token;

const updateToken = (successCallback: () => void) =>
  keycloak.updateToken(5).then(successCallback).catch(login);

const getUsername = () => keycloak.tokenParsed?.preferred_username;

const hasRole = (roles: string[]) =>
  roles.some((role) => keycloak.hasRealmRole(role));

const AuthService = {
  initKeycloak,
  login,
  logout,
  isLoggedIn,
  getToken,
  updateToken,
  getUsername,
  hasRole,
};

export default AuthService;
