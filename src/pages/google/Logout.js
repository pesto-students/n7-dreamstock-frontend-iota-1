import React from "react";
import { GoogleLogout } from "react-google-login";
import { ButtonTransparent } from "../../components/Button";
import { ClearLoggedInUserInfo } from "../../utils/CommonUtils";

const clientId =
  "610233614673-jvsmjb0uhvppt0pqapelspsdibpvrd3c.apps.googleusercontent.com";

const Logout = () => {
  const onSuccess = () => {
    ClearLoggedInUserInfo();
  };

  return (
    <GoogleLogout
      render={(renderProps) => (
        <ButtonTransparent label="Logout" {...renderProps} />
      )}
      clientId={clientId}
      buttonText="Logout"
      onLogoutSuccess={onSuccess}
    />
  );
};

export default Logout;
