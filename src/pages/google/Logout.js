import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId =
  "610233614673-jvsmjb0uhvppt0pqapelspsdibpvrd3c.apps.googleusercontent.com";

const Logout = () => {
  const onSuccess = () => {
    alert("Logout Success!");
  };

  return (
    <GoogleLogout
      clientId={clientId}
      buttonText="Logout"
      onLogoutSuccess={onSuccess}
    />
  );
};

export default Logout;
