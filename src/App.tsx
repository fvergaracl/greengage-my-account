import React from "react";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import { getKeycloakInstance } from "./Keycloak";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import WelcomePage from "./pages/Homepage";
import SecuredPage from "./pages/Securedpage";
import PrivateRoute from "./helpers/PrivateRoute";

function App() {
  const [keycloak, setKeycloak] = React.useState<any>(null);
  React.useEffect(() => {
    const keycloakInstance = getKeycloakInstance();
    setKeycloak(keycloakInstance);
  }, []);

  return (
    <div>
      {keycloak && (
        <ReactKeycloakProvider authClient={keycloak}>
          <Nav />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<WelcomePage />} />
              <Route
                path="/secured"
                element={
                  <PrivateRoute>
                    <SecuredPage />
                  </PrivateRoute>
                }
              />
            </Routes>
          </BrowserRouter>
        </ReactKeycloakProvider>
      )}
    </div>
  );
}

export default App;
