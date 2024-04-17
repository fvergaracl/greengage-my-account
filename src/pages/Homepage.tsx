import React from "react";
import { useKeycloak } from "@react-keycloak/web";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const { keycloak } = useKeycloak();

  if (keycloak?.authenticated) {
    navigate("/secured");
  }

  return (
    <div>
      <h1 className="text-green-800 text-4xl">My Greengage account</h1>
    </div>
  );
};

export default Home;
