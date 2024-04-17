import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "https://auth1.demo.greengage-project.eu/auth",
  realm: "greengage",
  clientId: "myAccount",
});

export default keycloak;
