import React from "react";
import { useKeycloak } from "@react-keycloak/web";

const Secured = () => {
  const { keycloak } = useKeycloak();

  const attributes = {
    email: keycloak?.tokenParsed?.email,
    userId: keycloak?.tokenParsed?.sub,
    ageRange: keycloak?.tokenParsed?.userAttribute_ageRange,
    digitalToolsAcquaintance:
      keycloak?.tokenParsed?.userAttribute_digitalToolsAcquaintance,
    disadvantagedGroup: keycloak?.tokenParsed?.userAttribute_disadvantagedGroup,
    educationLevel: keycloak?.tokenParsed?.userAttribute_educationLevel,
    gender: keycloak?.tokenParsed?.userAttribute_gender,
    organizationType: keycloak?.tokenParsed?.userAttribute_organizationType,
    thematicRole: keycloak?.tokenParsed?.userAttribute_thematicRole,
    workStatus: keycloak?.tokenParsed?.userAttribute_workStatus,
    zipCode: keycloak?.tokenParsed?.userAttribute_zipCode,
  };

  return (
    <div>
      <h1 className="text-black text-4xl text-center">My Greengage account</h1>
      <br />
      <div className="text-black text-center">
        <h3>Email: {attributes?.email}</h3>
        <p>User ID: {attributes?.userId}</p>

        <hr className="py-2" />
        <h3>Age Range: {attributes?.ageRange}</h3>
        <h3>
          Digital Tools Acquaintance: {attributes?.digitalToolsAcquaintance}
        </h3>
        <h3>Disadvantaged Group: {attributes?.disadvantagedGroup}</h3>
        <h3>Education Level: {attributes?.educationLevel}</h3>
        <h3>Gender: {attributes?.gender}</h3>
        <h3>Organization Type: {attributes?.organizationType}</h3>
        <h3>Thematic Role: {attributes?.thematicRole}</h3>
        <h3>Work Status: {attributes?.workStatus}</h3>
        <h3>Zip Code: {attributes?.zipCode}</h3>
      </div>
    </div>
  );
};

export default Secured;
