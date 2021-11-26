import React from "react";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { ButtonTransparent } from "../../components/Button";
import { initiateUserLogin } from "../../store/actions/authAction";
import config from "../../config.json";

const clientId = config.OAUTH_CLIENT_ID;

const GLogin = () => {
  const dispatch = useDispatch();
  const onSuccess = (response) => {
    dispatch(initiateUserLogin(response.profileObj));
  };

  const onFailure = () => {
    alert("Google Login Failed!");
  };

  return (
    <GoogleLogin
      clientId={clientId}
      render={(renderProps) => (
        <ButtonTransparent label="Google" width={"100%"} {...renderProps} />
      )}
      buttonText="Login"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={"single_host_origin"}
      isSignedIn={false}
    />
  );
};

export default GLogin;
