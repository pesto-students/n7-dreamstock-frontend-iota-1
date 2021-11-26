import React from "react";
import { GoogleLogout } from "react-google-login";
import { ButtonTransparent } from "../../components/Button";
import { ClearLoggedInUserInfo } from "../../utils/CommonUtils";
import config from "../../config.json";

const clientId = config.OAUTH_CLIENT_ID;

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
