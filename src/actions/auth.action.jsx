import Keycloak from "keycloak-js";

const keycloakClient = new Keycloak({
    realm: "ems",
    url: "http://192.168.81.217:8080/auth"

});