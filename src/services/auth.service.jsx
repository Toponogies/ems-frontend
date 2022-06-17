import Keycloak from "keycloak-js";
import {AUTH_CLIENT_ID, AUTH_REALM, AUTH_URL} from "../utils/constants";

const keycloak = new Keycloak({
    url: AUTH_URL,
    realm: AUTH_REALM,
    clientId: AUTH_CLIENT_ID
});

const init = (onAuthenticatedCallback) => {
    keycloak.init({
        onLoad: "check-sso",
        silentCheckSsoRedirectUri: window.location.origin + "/silent-check-sso.html",
        pkceMethod: "S256"
    }).then((authenticated) => {
        if (authenticated) {
            onAuthenticatedCallback();
        } else {
            doLogin();
        }
    });
};

const doLogin = keycloak.login;

const doLogout = keycloak.logout;

const getToken = () => {
    return keycloak.token;
};

const updateToken = (successCallback) => {
    keycloak.updateToken(5)
        .then(successCallback)
        .catch(doLogin);
};

const getUsername = () => keycloak.tokenParsed?.preferred_username;

const hasRole = (roles) => roles.some((role) => keycloak.hasRealmRole(role));

const AuthService = {
    init,
    doLogin,
    doLogout,
    getToken,
    updateToken,
    getUsername,
    hasRole
};

export default AuthService;