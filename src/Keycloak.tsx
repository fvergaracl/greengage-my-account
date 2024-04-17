import Keycloak from "keycloak-js";

const keycloakConfig = {
  url: "https://auth1.demo.greengage-project.eu",
  realm: "greengage",
  clientId: "myAccount",
};

let instance: Keycloak.KeycloakInstance | null = null;

export const getKeycloakInstance = () => {
  if (!instance) {
    instance = new Keycloak(keycloakConfig);
    instance
      .init({ onLoad: "login-required" })
      .then((authenticated) => {
        console.log("Authenticated: ", authenticated);
      })
      .catch((err) => {
        console.error("Keycloak initialization error:", err);
      });
  }
  return instance;
};
